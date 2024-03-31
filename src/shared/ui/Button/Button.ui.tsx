import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from 'shared/lib/classNames'

import cls from './Button.module.scss'

export enum ButtonVariants {
  CLEAR = 'clear',
  PRIMARY = 'primary'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  variant?: ButtonVariants
}

const Button: FC<ButtonProps> = props => {
  const { className, variant = ButtonVariants.PRIMARY, children, type = 'button', ...rest } = props

  return (
    <button
      className={cn(className, [cls.btn, cls[`btn-${variant}`]])}
      type={type}
      {...rest}
    >
      {children}
    </button >
  )
}

export default Button
