import { Suspense, type FC } from 'react'

import { AppRouter } from './providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
  return (
    <div id="app">
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
