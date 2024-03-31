import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

import './styles/index.scss'

const App = () => {
  const { theme } = useTheme()

  return (
    <div id='app' className={theme}>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
