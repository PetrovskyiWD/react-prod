import { type FC } from 'react'

import { cn } from 'shared/lib/classNames/classNames'

import styles from './Navbar.module.scss'

const Navbar: FC = () => {
  return (
    <div className={cn(styles.navbar)} data-testid="navbar-widget">
    </div>
  )
}

export default Navbar
