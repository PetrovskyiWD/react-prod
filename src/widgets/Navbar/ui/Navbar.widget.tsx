import { FC } from 'react'

import { cn } from 'shared/lib/classNames'

import { AppLink } from 'shared/ui'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import styles from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(styles.navbar, [className])}>
      <ThemeSwitcher />
      <AppLink to='/'>Home</AppLink>
      <AppLink to='/about'>About Us</AppLink>
    </div>
  )
}

export default Navbar
