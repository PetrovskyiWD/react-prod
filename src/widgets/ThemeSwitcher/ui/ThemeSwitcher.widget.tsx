import { type FC } from 'react'

import { ThemeTypes, useTheme } from 'app/providers/ThemeProvider'

import { Button, ButtonVariant } from 'shared/ui'

import DefaultThemeIcon from 'shared/assets/icons/svg/theme-default.svg'
import DarkThemeIcon from 'shared/assets/icons/svg/theme-dark.svg'

const ThemeIcon = {
  [ThemeTypes.LIGHT]: <DefaultThemeIcon />,
  [ThemeTypes.DARK]: <DarkThemeIcon />
}

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant={ButtonVariant.CLEAR} onClick={toggleTheme}>
      {ThemeIcon[theme]}
    </Button>
  )
}

export default ThemeSwitcher
