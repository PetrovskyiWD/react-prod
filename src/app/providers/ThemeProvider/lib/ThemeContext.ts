import { createContext } from 'react'

import { Theme, type IThemeProps } from './theme.types'

export const ThemeContext = createContext<IThemeProps>({
  theme: Theme.LIGHT,
  setTheme: () => {}
})
