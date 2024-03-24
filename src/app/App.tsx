import { Link } from 'react-router-dom'

import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'

import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id='app' className={theme}>
      <div>
        <button
          type='button'
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
      <Link to='/'>Main page</Link>
      <Link to='/about'>About page</Link>
      <AppRouter />
    </div>
  )
}

export default App
