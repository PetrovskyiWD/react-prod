import { useState, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui'

import styles from './Navbar.module.scss'
import { LoginModal } from 'features/AuthByUsername'

const Navbar: FC = () => {
  const [showModal, setShowModal] = useState(false)
  const { t } = useTranslation()

  const handleOpenModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  return (
    <>
      <div className={cn(styles.navbar)} data-testid="navbar-widget">
        <ul>
          <li>
            <Button variant={ButtonVariant.CLEAR_INVERTED} onClick={handleOpenModal}>
              {t('sign_in')}
            </Button>
          </li>
        </ul>
      </div>

      <LoginModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  )
}

export default Navbar
