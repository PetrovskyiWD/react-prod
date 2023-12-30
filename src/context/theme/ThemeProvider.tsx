import { FC, useMemo, useState } from "react"

import { ThemeContext } from "./ThemeContext"
import { Theme } from "./theme.types"

export const LS_THEME_KEY = 'theme';

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGHT)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

