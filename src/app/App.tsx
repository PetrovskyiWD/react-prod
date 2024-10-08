import { Suspense, type FC } from 'react'

import { useTheme } from './providers/ThemeProvider'

import { AppRouter } from './providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import './styles/index.scss'

const App: FC = () => {
  const { theme } = useTheme()

  return (
    <div id="app" className={theme}>
      <Suspense fallback="">
        <Navbar />
        <main>
          <Sidebar />
          <div className="content-block">
            <AppRouter />
          </div>
        </main>
      </Suspense>
    </div>
  )
}

export default App
