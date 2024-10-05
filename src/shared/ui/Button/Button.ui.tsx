import { type ButtonHTMLAttributes, type FC } from 'react'

import { cn } from 'shared/lib/classNames/classNames'

import styles from './Button.module.scss'

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  CLEAR = 'clear'
}

export enum ButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: ButtonVariant
  square?: boolean
  size?: ButtonSize
}

const Button: FC<ButtonProps> = ({
  className = '',
  variant = ButtonVariant.PRIMARY,
  square = false,
  size = ButtonSize.M,
  type = 'button',
  children,
  ...rest
}) => {
  const classNames = cn(styles.btn, [className, styles[variant], styles[size]], { [styles.square]: square })

  return (
    <button className={classNames} type={type} {...rest}>
      {children}
    </button>
  )
}

export default Button
