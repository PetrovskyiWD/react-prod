import { type Decorator } from '@storybook/react/*'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import i18n from '../i18n/i18n'
import { Suspense, useEffect } from 'react'
import { ThemeProvider } from 'app/providers/ThemeProvider'

const ClobalDecorator: Decorator = (Story, { globals }) => {
  const { locale, theme } = globals

  useEffect(() => {
    const changeLanguage = async (): Promise<void> => {
      await i18n.changeLanguage(locale as string)
    }

    changeLanguage().catch((error) => {
      console.error(error)
    })
  }, [locale])

  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light')
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div id="app" style={{ padding: '1rem', margin: '-1rem' }}>
      <BrowserRouter>
        <ThemeProvider>
          <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
              <Story />
            </I18nextProvider>
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default ClobalDecorator
