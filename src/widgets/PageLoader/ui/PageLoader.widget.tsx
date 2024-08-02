import { type FC } from 'react'

import { Loader } from 'shared/ui'

import styles from './PageLoader.module.scss'

const PageLoader: FC = () => {
  return (
    <div className={styles['page-loader']}>
      <Loader />
    </div>
  )
}

export default PageLoader
