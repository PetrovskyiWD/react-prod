import { type ButtonHTMLAttributes, type FC } from 'react'

import { cn } from 'shared/lib/classNames/classNames'

import styles from './Button.module.scss'

export enum ButtonVariants {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariants
}

const Button: FC<ButtonProps> = props => {
  const {
    className = '',
    variant = ButtonVariants.PRIMARY,
    type = 'button',
    children,
    ...rest
  } = props

  return (
    <button
      className={cn(styles.btn as string, [className, styles[variant] as string])}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
