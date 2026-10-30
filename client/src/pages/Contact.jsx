import { contact } from '../data/content.js'

const Contact = () => {
  return (
    <section className='contact'>
      <h1>Contact</h1>
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
        <a href="/CV.pdf" target='_blank' rel='noreferrer' className='button'>View my CV</a>
      </div>
    </section>
  )
}

export default Contact