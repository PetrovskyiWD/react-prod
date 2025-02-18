import { useCallback, type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { loginActions, loginByUsername, LoginErrors } from 'features/AuthByUsername'
import { loginReducer } from '../../model/slice/loginSlice'

import { Button, Input, Typography } from 'shared/ui'
import { TypographySize, TypographyVariant } from 'shared/ui/Typography/Typography.ui'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'

import styles from './LoginForm.module.scss'
import DynamicModuleLoader, { type ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const initialReducers: ReducerList = {
  loginForm: loginReducer
}

const LoginForm: FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginLoading)
  const error = useSelector(getLoginError)

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
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={styles['login-form']}>
        <Input
          type="text"
          name="username"
          placeholder={t('username')}
          value={username}
          onChange={handleChangeUsername}
        />
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
    </DynamicModuleLoader>
  )
}

export default LoginForm
