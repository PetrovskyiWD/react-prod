import { useState, type FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { cn } from 'shared/lib/classNames/classNames'
import { getUserIsLoggedIn, userActions } from 'essences/user'

import { Button, ButtonVariant } from 'shared/ui'
import { LoginModal } from 'features/AuthByUsername'

import styles from './Navbar.module.scss'

const Navbar: FC = () => {
  const [showModal, setShowModal] = useState(false)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isUserLoggedIn = useSelector(getUserIsLoggedIn)

  const handleOpenModal = useCallback(() => {
    setShowModal(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setShowModal(false)
  }, [])

  const handleLogOut = useCallback(() => {
    dispatch(userActions.removeAuthData())
  }, [dispatch])

  useEffect(() => {
    if (isUserLoggedIn) {
      setShowModal(false)
    }
  }, [isUserLoggedIn])

  return (
    <>
      <div className={cn(styles.navbar)} data-testid="navbar-widget">
        <ul>
          <li>
            {!isUserLoggedIn ? (
              <Button variant={ButtonVariant.CLEAR_INVERTED} onClick={handleOpenModal}>
                {t('sign_in')}
              </Button>
            ) : (
              <Button variant={ButtonVariant.CLEAR_INVERTED} onClick={handleLogOut}>
                {t('logout')}
              </Button>
            )}
          </li>
        </ul>
      </div>

      <LoginModal isOpen={showModal} onClose={handleCloseModal} />
    </>
  )
}

export default Navbar
