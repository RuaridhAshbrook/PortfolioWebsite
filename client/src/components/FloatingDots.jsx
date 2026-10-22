import { useMemo } from 'react'

const COUNT = 45 // how many dots

// Small seeded random generator: same "random" layout on every load
function mulberry32(seed) {
    return function () {
        seed = (seed + 0x6d2b79f5) | 0
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

const FloatingDots = () => {
    const dots = useMemo(() => {
        const rand = mulberry32(2024) // change this number for a different layout
        const between = (min, max) => min + rand() * (max - min)

        return Array.from({ length: COUNT }, (_, id) => {
            const angle = rand() * Math.PI * 2 // each dot picks its own direction
            const distance = between(40, 140) // how far it drifts, in px
            return {
                id,
                left: between(0, 100),
                top: between(0, 100),
                size: 4 + rand() ** 2 * 18, // 4px to 24px, mostly small
                opacity: between(0.35, 0.75),
                colour: Math.floor(rand() * 4),
                dx: Math.cos(angle) * distance,
                dy: Math.sin(angle) * distance,
                duration: between(18, 45), // seconds per drift
                delay: -between(0, 45), // negative = start part-way through
            }
        })
    }, [])

    return (
        <div className='floating-dots' aria-hidden='true'>
            {dots.map((d) => (
                <span
                    key={d.id}
                    className={`floating-dot dot-c${d.colour}`}
                    style={{
                        left: `${d.left}%`,
                        top: `${d.top}%`,
                        width: `${d.size}px`,
                        height: `${d.size}px`,
                        opacity: d.opacity,
                        '--dx': `${d.dx}px`,
                        '--dy': `${d.dy}px`,
                        animationDuration: `${d.duration}s`,
                        animationDelay: `${d.delay}s`,
                    }}
                />
            ))}
        </div>
    )
}

export default FloatingDots