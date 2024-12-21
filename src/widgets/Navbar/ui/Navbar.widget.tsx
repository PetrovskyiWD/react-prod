import { useState, type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant, Modal } from 'shared/ui'

import styles from './Navbar.module.scss'

const Navbar: FC = () => {
  const [showModal, setShowModal] = useState(false)
  const { t } = useTranslation()

  const handleToggleModal = useCallback(() => {
    setShowModal((prev) => !prev)
  }, [])

  return (
    <>
      <div className={cn(styles.navbar)} data-testid="navbar-widget">
        <ul>
          <li>
            <Button
              variant={ButtonVariant.CLEAR_INVERTED}
              onClick={handleToggleModal}
            >
              {t('sign_in')} 
            </Button>
          </li>
        </ul>
      </div>

      <Modal
        isOpen={showModal}
        onClose={handleToggleModal}
        >
          {t('sign_in')}
      </Modal>
    </>
  )
}

export default Navbar
