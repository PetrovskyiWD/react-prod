import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Input } from 'shared/ui'

import styles from './LoginForm.module.scss'
const LoginForm: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles['login-form']}>
      <Input type="text" name="username" placeholder="Username" />
      <Input type="password" name="password" placeholder="Password" />
      <Button>{t('sign_in')}</Button>
    </div>
  )
}

export default LoginForm
