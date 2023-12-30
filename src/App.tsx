import { Suspense, useContext } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import { AboutPageAsync } from './pages/About/About.pageAsync'
import { MainPageAsync } from './pages/Main/Main.pageAsync'
import { useTheme } from './context/theme/useTheme.hook'
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
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
