import { ButtonHTMLAttributes, FC } from 'react'

import { cn } from 'shared/lib/classNames'

import styles from './Button.module.scss'

export enum ButtonVariants {
  CLEAR = 'clear',
  PRIMARY = 'primary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  variant?: ButtonVariants
}

const Button: FC<ButtonProps> = props => {
  const {
    className,
    variant = ButtonVariants.PRIMARY,
    type = 'button',
    children,
    ...rest
  } = props

  return (
    <button
      className={cn(styles.btn, [className, styles[variant]])}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
