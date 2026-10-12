import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const themeClass = isDarkTheme ? 'page-dark' : 'page-light'

      const headingClass = isDarkTheme ? 'heading-dark' : 'heading-light'

      return (
        <main className={`page-container ${themeClass}`}>
          <img src={homeImg} alt="home" className="page-image" />
          <h1 className={headingClass}>Home</h1>
        </main>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
