import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { AboutPage } from 'pages/About'
import { MainPage } from 'pages/Main'
import { useTheme } from './providers/ThemeProvider'

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
