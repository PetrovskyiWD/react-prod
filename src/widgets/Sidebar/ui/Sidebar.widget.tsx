import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/classNames/classNames'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const [collapse, setCollapse] = useState(false)
  const { t } = useTranslation()

  const collapseToggle = (): void => { setCollapse(prev => !prev) }

  return (
    <div
      className={cn(styles.sidebar as string, [], { [styles.collapsed]: collapse })}
      data-testid='sidebar-widget'
    >
      <button
        onClick={collapseToggle}
        data-testid='sidebar-collapse-btn'
      >
        #||#
      </button>
      <div>
        {t('sidebar')}
      </div>
    </div>
  )
}

export default Sidebar
