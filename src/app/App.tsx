import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div id='app' className={theme}>
      <Navbar />
      <main>
        <Sidebar />
        <div className='content-block'>
          <AppRouter />
        </div>
      </main>
    </div>
  )
}

export default App
