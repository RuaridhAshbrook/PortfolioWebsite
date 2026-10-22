import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link to='/' className='logo' aria-label='Home'>
          <img src='/logo.svg' alt='Site logo' className='logo-img' />
        </Link>
      </div>
      <div className='navbar-right'>
        <ul className='nav-links'>
          <li><NavLink to='/' end>Home</NavLink></li>
          <li><NavLink to='/about'>About Me</NavLink></li>
          <li><NavLink to='/projects'>Projects</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><ThemeToggle /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
