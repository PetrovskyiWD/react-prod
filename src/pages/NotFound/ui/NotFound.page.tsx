import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './NotFound.module.scss'

const NotFoundPage: FC = () => {
  const { t } = useTranslation()

  return <div className={styles['not-found-page']}>{t('not_found_page')}</div>
}

export default NotFoundPage
