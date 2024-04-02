import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import { cn } from 'shared/lib/classNames'

import styles from './AppLink.module.scss'

export enum AppLinkVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  variant?: AppLinkVariants
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, variant = AppLinkVariants.PRIMARY, children, ...rest } = props
  const classNames = cn(styles['app-link'] as string, [styles[variant] as string])

  return (
    <Link
      to={to}
      className={classNames}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default AppLink
