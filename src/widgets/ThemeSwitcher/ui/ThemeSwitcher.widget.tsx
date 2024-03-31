import { useTheme } from "app/providers/ThemeProvider"
import { FC } from "react"

interface ThemeSwitcherProps {
  className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme()

  return (
    <button
      type='button'
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  )
}

export default ThemeSwitcher

