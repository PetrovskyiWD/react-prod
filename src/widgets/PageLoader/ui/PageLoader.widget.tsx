import { type FC } from 'react'

import { Loader } from 'shared/ui'

import styles from './PageLoader.module.scss'

const PageLoader: FC = () => {
  return (
    <div className={styles.PageLoader}>
      <Loader />
    </div>
  )
}

export default PageLoader
