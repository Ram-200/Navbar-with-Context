import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navClass = isDarkTheme ? 'navbar-dark' : 'navbar-light'

      const headingClass = isDarkTheme
        ? 'nav-heading-dark'
        : 'nav-heading-light'

      return (
        <nav className={`navbar ${navClass}`}>
          <img src={logoImg} alt="website logo" className="nav-logo" />

          <ul className="nav-links">
            <li>
              <Link to="/" className={headingClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={headingClass}>
                About
              </Link>
            </li>
          </ul>

          <button
            type="button"
            data-testid="theme"
            className="theme-button"
            onClick={toggleTheme}
          >
            <img src={themeImg} alt="theme" className="theme-logo" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
