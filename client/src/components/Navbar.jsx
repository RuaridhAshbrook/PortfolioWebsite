import { Link, NavLink } from 'react-router-dom'

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
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
