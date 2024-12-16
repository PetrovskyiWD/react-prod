import { useContext, useEffect } from 'react'

import { ThemeContext } from './ThemeContext'
import { type IUseThemeResult, Theme } from './theme.types'
import { LS_THEME_KEY } from '../ui/ThemeProvider'

export function useTheme(): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    localStorage.setItem(LS_THEME_KEY, newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark', theme === Theme.DARK)
    document.body.classList.toggle('light', theme === Theme.LIGHT)
  }, [theme])

  return { theme, toggleTheme }
}
