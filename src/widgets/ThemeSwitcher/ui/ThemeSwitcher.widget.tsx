import { type FC } from 'react'

import { ThemeTypes, useTheme } from 'app/providers/ThemeProvider'

import { Button, ButtonVariants } from 'shared/ui'

import DefaultThemeIcon from 'shared/assets/icons/svg/theme-default.svg'
import DarkThemeIcon from 'shared/assets/icons/svg/theme-dark.svg'

import styles from './ThemeSwitcher.module.scss'

const ThemeIcon = {
  [ThemeTypes.LIGHT]: <DefaultThemeIcon />,
  [ThemeTypes.DARK]: <DarkThemeIcon />
}

const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button className={styles['theme-switch-btn']} variant={ButtonVariants.CLEAR} onClick={toggleTheme}>
      {ThemeIcon[theme]}
    </Button>
  )
}

export default ThemeSwitcher
