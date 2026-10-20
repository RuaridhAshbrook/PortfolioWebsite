import { profile } from '../data/content.js'

const About = () => {
  return (
    <section className='about'>
      <h1>About Me</h1>
      <div className='about-gallery'>
        {profile.aboutImages.map((img, i) => (
          <img key={i} src={img.src} alt={img.alt} />
        ))}
      </div>
      <div className='about-text'>
        {profile.aboutText.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default About
