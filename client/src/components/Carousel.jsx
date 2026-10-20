import { useEffect, useState } from 'react'

// Image carousel with previous/next buttons, dots and optional auto-play.
// images: [{ src, alt }]
const Carousel = ({ images, autoPlayMs = 5000 }) => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = images.length

  // Go back to the first image if the list changes (e.g. switching project).
  useEffect(() => {
    setIndex(0)
  }, [images])

  useEffect(() => {
    if (paused || count < 2 || !autoPlayMs) return undefined
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), autoPlayMs)
    return () => clearInterval(timer)
  }, [paused, count, autoPlayMs])

  if (count === 0) return null

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  return (
    <div
      className='carousel'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <img className='carousel-image' src={images[index].src} alt={images[index].alt} />

      {count > 1 && (
        <>
          <button type='button' className='carousel-btn carousel-prev' onClick={prev} aria-label='Previous image'>
            &#8249;
          </button>
          <button type='button' className='carousel-btn carousel-next' onClick={next} aria-label='Next image'>
            &#8250;
          </button>
          <div className='carousel-dots'>
            {images.map((img, i) => (
              <button
                key={i}
                type='button'
                className={i === index ? 'dot active' : 'dot'}
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1} of ${count}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Carousel
