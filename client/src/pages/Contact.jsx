import { useState } from 'react'
import { contact } from '../data/content.js'

// Where the form is sent. Set VITE_CONTACT_ENDPOINT at build time to the URL
// of your AWS endpoint (see README). Falls back to /api/contact.
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT || '/api/contact'

const emptyForm = { name: '', email: '', message: '', website: '' } // "website" is a hidden spam trap

const Contact = () => {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        let detail = ''
        try {
          detail = (await res.json()).error || ''
        } catch {
          // response was not JSON
        }
        throw new Error(detail || `Request failed (${res.status})`)
      }
      setStatus('sent')
      setForm(emptyForm)
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className='contact'>
      <h1>Contact</h1>
      <div className='contact-grid'>
        <div className='contact-details'>
          <h2>Get in touch</h2>
          <ul>
            <li><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><strong>Phone:</strong> <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></li>
            <li><strong>Location:</strong> {contact.location}</li>
            {contact.socials.map((s) => (
              <li key={s.href}>
                <strong>{s.label}:</strong>{' '}
                <a href={s.href} target='_blank' rel='noreferrer'>{s.href.replace(/^https?:\/\//, '')}</a>
              </li>
            ))}
          </ul>
        </div>

        <form className='contact-form' onSubmit={submit}>
          <h2>Send me a message</h2>

          <label htmlFor='name'>Name</label>
          <input id='name' name='name' value={form.name} onChange={update} required maxLength={100} />

          <label htmlFor='email'>Email</label>
          <input id='email' name='email' type='email' value={form.email} onChange={update} required maxLength={200} />

          <label htmlFor='message'>Message</label>
          <textarea id='message' name='message' rows={6} value={form.message} onChange={update} required maxLength={5000} />

          {/* Hidden from people, bots tend to fill it in */}
          <input
            name='website'
            value={form.website}
            onChange={update}
            tabIndex={-1}
            autoComplete='off'
            aria-hidden='true'
            className='hp-field'
          />

          <button type='submit' className='button' disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>

          <p role='status' className={`form-status ${status}`}>
            {status === 'sent' && 'Thanks, your message has been sent.'}
            {status === 'error' && error}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
