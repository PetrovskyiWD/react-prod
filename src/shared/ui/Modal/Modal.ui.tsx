import { useCallback, useEffect, useRef, useState } from 'react'
import type React from 'react'

import { cn } from 'shared/lib/classNames/classNames'
import Portal from '../Portal/Portal.ui'

import styles from './Modal.module.scss'

interface IModalProps {
  className?: string
  children: React.ReactNode
  isOpen?: boolean
  lazy?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

const Modal: React.FC<IModalProps> = ({ className = '', isOpen = false, lazy = false, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const modalClasses = cn(styles.modal, [className], {
    [styles.show]: isOpen,
    [styles.hiding]: isClosing
  })

  const handleClose = useCallback((): void => {
    setIsClosing(true)

    timerRef.current = setTimeout(() => {
      onClose?.()
      setIsClosing(false)
    }, ANIMATION_DELAY)
  }, [onClose])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        handleClose()
      }
    },
    [handleClose]
  )

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  if (lazy && !isMounted) return null

  return (
    <Portal>
      <div className={modalClasses}>
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal
