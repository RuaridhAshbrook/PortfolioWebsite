import { useEffect, useState } from 'react'

// Saved choice first, otherwise follow the visitor's system setting
const getInitialTheme = () => {
    try {
        const saved = localStorage.getItem('theme')
        if (saved === 'light' || saved === 'dark') return saved
    } catch {
        // storage unavailable, fall through
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const ThemeToggle = () => {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        try {
            localStorage.setItem('theme', theme)
        } catch {
            // ignore
        }
    }, [theme])

    const isDark = theme === 'dark'

    return (
        <button
            type='button'
            className='theme-toggle'
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? '☀ Light' : '☾ Dark'}
        </button>
    )
}

export default ThemeToggle