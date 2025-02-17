// eslint-disable-next-line react/no-deprecated
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { StoreProvider } from 'app/providers/StoreProvider'
import App from './app/App'

import 'shared/config/i18n/i18n'
import './app/styles/index.scss'

const root = createRoot(document.getElementById('root') ?? document.body)

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
)
