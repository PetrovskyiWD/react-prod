import { useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, Typography } from 'shared/ui'
import { loginActions, getLoginState, loginByUsername, LoginErrors } from 'features/AuthByUsername'

import styles from './LoginForm.module.scss'
import { TypographySize, TypographyVariant } from 'shared/ui/Typography/Typography.ui'

const LoginForm: FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)

  const handleChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const handleChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const handleLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }) as any)
  }, [dispatch, username, password])

  return (
    <div className={styles['login-form']}>
      <Input type="text" name="username" placeholder={t('username')} value={username} onChange={handleChangeUsername} />
      <Input
        type="password"
        name="password"
        placeholder={t('password')}
        value={password}
        onChange={handleChangePassword}
      />

      {error === LoginErrors.INCORRECT_AUTH_DATA ? (
        <Typography text={t('auth_by_username_error')} variant={TypographyVariant.ERROR} size={TypographySize.S} />
      ) : null}

      <Button loading={isLoading} onClick={handleLogin}>
        {t('sign_in')}
      </Button>
    </div>
  )
}

export default LoginForm
