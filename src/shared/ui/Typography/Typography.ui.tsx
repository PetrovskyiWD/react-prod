import { createElement, type FC } from 'react'

import { cn } from 'shared/lib/classNames/classNames'

import styles from './Typography.module.scss'

export enum TypographyVariant {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error'
}

export enum TypographySize {
  S = 'size-s',
  M = 'size-m'
}

interface TypographyProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  variant?: TypographyVariant
  size?: TypographySize
  className?: string
}

const Typography: FC<TypographyProps> = ({
  text,
  as = 'p',
  variant = TypographyVariant.PRIMARY,
  className = '',
  size = TypographySize.M
}) => {
  const classNames = cn(className, [styles[variant], styles[size]])

  return createElement(as, { className: classNames }, text)
}

export default Typography
