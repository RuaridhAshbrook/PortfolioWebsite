import { useState } from 'react'
import Carousel from '../components/Carousel.jsx'
import { projects } from '../data/content.js'

const Projects = () => {
  const [activeId, setActiveId] = useState(projects[0]?.id)
  const active = projects.find((p) => p.id === activeId) ?? projects[0]

  if (!active) return <p>No projects yet.</p>

  return (
    <section className='projects'>
      <h1>Projects</h1>

      <div className='project-tabs' role='tablist' aria-label='Projects'>
        {projects.map((p) => (
          <button
            key={p.id}
            type='button'
            role='tab'
            aria-selected={p.id === active.id}
            className={p.id === active.id ? 'tab active' : 'tab'}
            onClick={() => setActiveId(p.id)}
          >
            {p.title}
          </button>
        ))}
      </div>

      <article className='project-detail' role='tabpanel'>
        <Carousel images={active.images} />
        <div>
          <h2>{active.title}</h2>
          <p className='project-summary'>{active.summary}</p>
          <p>{active.description}</p>
          <ul className='tags'>
            {active.tech.map((t) => <li key={t}>{t}</li>)}
          </ul>
          {active.links.length > 0 && (
            <p className='project-links'>
              {active.links.map((l) => (
                <a key={l.href} href={l.href} target='_blank' rel='noreferrer' className='button'>
                  {l.label}
                </a>
              ))}
            </p>
          )}
        </div>
      </article>
    </section>
  )
}

export default Projects
