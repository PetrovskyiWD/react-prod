import { type FC } from 'react'

import { cn } from 'shared/lib/classNames/classNames'

import styles from './Loader.module.scss'

export enum LoaderVariant {
  PRIMARY = 'primary',
  INVERTED = 'inverted'
}

export enum LoaderSize {
  S = 'size-s',
  M = 'size-m',
  L = 'size-l'
}

interface LoaderProps {
  variant?: LoaderVariant
  size?: LoaderSize
}

const Loader: FC<LoaderProps> = ({ variant = LoaderVariant.PRIMARY, size = LoaderSize.L }) => {
  const classNames = cn(styles.loader, [styles[variant], styles[size]])
  return <span className={classNames} data-testid="loader"></span>
}

export default Loader
