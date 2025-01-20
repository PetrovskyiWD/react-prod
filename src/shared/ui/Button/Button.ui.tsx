import { type ButtonHTMLAttributes, type FC } from 'react'

import { cn } from 'shared/lib/classNames/classNames'
import Loader, { LoaderSize, LoaderVariant } from '../Loader/Loader.ui'

import styles from './Button.module.scss'

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear-inverted'
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
  loading?: boolean
}

const Button: FC<ButtonProps> = ({
  className = '',
  variant = ButtonVariant.PRIMARY,
  square = false,
  size = ButtonSize.M,
  type = 'button',
  loading = false,
  children,
  ...rest
}) => {
  const classNames = cn(styles.btn, [className, styles[variant], styles[size]], { [styles.square]: square })
  const loaderVariant = variant === ButtonVariant.PRIMARY ? LoaderVariant.INVERTED : LoaderVariant.PRIMARY

  return (
    <button className={classNames} type={type} disabled={loading} data-testid="button" {...rest}>
      {loading ? <Loader variant={loaderVariant} size={LoaderSize.S} /> : children}
    </button>
  )
}

export default Button
