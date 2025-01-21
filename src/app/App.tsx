import { Suspense, type FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { AppRouter } from './providers/Router'
import { userActions } from 'essences/user'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

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
