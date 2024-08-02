import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './PageError.module.scss'

const PageError: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={styles['page-error']}>
      <p>{t('something_went_wrong')}</p>
      <p>{t('please_reload_the_page')}</p>
    </div>
  )
}

export default PageError
