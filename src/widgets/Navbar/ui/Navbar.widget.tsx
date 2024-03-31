import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/classNames'

import { AppLink } from 'shared/ui'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation()

  return (
    <div className={cn(styles.navbar, [className])}>
      <ThemeSwitcher />
      <LanguageSwitcher />
      <AppLink to='/'>{t('home')}</AppLink>
      <AppLink to='/about'>{t('about_us')}</AppLink>
    </div>
  )
}

export default Navbar
