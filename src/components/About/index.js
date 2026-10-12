import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const themeClass = isDarkTheme ? 'page-dark' : 'page-light'

      const headingClass = isDarkTheme ? 'heading-dark' : 'heading-light'

      return (
        <main className={`page-container ${themeClass}`}>
          <img src={aboutImg} alt="about" className="page-image" />
          <h1 className={headingClass}>About</h1>
        </main>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
