import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundClass = isDarkTheme ? 'page-dark' : 'page-light'

      const headingClass = isDarkTheme ? 'heading-dark' : 'heading-light'

      return (
        <main className={`page-container ${notFoundClass}`}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="page-image"
          />
          <h1 className={headingClass}>Lost Your Way</h1>
          <p className={headingClass}>We cannot seem to find the page</p>
        </main>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
