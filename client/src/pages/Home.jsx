import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel.jsx'
import { profile, projects, featuredProjectId } from '../data/content.js'

const Home = () => {
  const featured = projects.find((p) => p.id === featuredProjectId) ?? projects[0]

  return (
    <>
      <section className='intro'>
        <h1>{profile.name}</h1>
        <p className='tagline'>{profile.tagline}</p>
        <p>{profile.intro}</p>
        <Link to='/about' className='button'>More about me</Link>
      </section>

      {featured && (
        <section className='featured'>
          <h2>Featured project</h2>
          <div className='featured-grid'>
            <Carousel images={featured.images} />
            <div>
              <h3>{featured.title}</h3>
              <p>{featured.description}</p>
              <ul className='tags'>
                {featured.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <Link to='/projects' className='button'>See all projects</Link>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default Home
