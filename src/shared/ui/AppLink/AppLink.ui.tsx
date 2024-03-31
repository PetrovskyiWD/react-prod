import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { cn } from 'shared/lib/classNames'

import cls from './AppLink.module.scss'

export enum AppLinkVariants {
  PRIMARY = 'app-link-primary',
  SECONDARY = 'app-link-secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string,
  variant?: AppLinkVariants
}

const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, variant = AppLinkVariants.PRIMARY, children, ...rest } = props
  const classNames = cn(cls['app-link'], [cls[variant]])

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

