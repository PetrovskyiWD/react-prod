import { memo } from 'react'

import styles from './Input.module.scss'
import { cn } from 'shared/lib/classNames/classNames'

type THTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface IInputProps extends THTMLInputProps {
  className?: string
  type?: string
  value?: string
  onChange?: (value: string) => void
}

const Input = memo(function Input({
  className = '',
  type = 'text',
  value,
  onChange,
  ...rest 
}: IInputProps) {
  const classNames = cn(styles.input, [className])

  const hnadleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
  }

  return (
    <div className={styles.inputWrapper}>
      <input className={classNames} type={type} value={value} onChange={hnadleOnChange} {...rest} />
    </div>
  )
})

export default Input
