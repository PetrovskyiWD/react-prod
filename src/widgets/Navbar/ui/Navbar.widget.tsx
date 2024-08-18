import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/classNames/classNames'

import { AppLink } from 'shared/ui'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

import styles from './Navbar.module.scss'

const Navbar: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={cn(styles.navbar as string)} data-testid="navbar-widget">
      <ThemeSwitcher />
      <LanguageSwitcher />
      <AppLink to="/">{t('home')}</AppLink>
      <AppLink to="/about">{t('about_us')}</AppLink>
    </div>
  )
}

export default Navbar
