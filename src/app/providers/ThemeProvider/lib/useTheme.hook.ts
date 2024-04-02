import { useContext } from 'react'

import { ThemeContext } from './ThemeContext'
import { type IUseThemeResult, Theme } from './theme.types'
import { LS_THEME_KEY } from '../ui/ThemeProvider'

export function useTheme (): IUseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    localStorage.setItem(LS_THEME_KEY, newTheme)
    setTheme(newTheme)
  }

  return { theme, toggleTheme }
}
