import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/classNames/classNames'
import { Button, ButtonVariant } from 'shared/ui'

import styles from './Sidebar.module.scss'
import { ButtonSize } from 'shared/ui/Button/Button.ui'

const Sidebar: FC = () => {
  const [collapse, setCollapse] = useState(false)
  const { t } = useTranslation()

  const collapseToggle = (): void => {
    setCollapse((prev) => !prev)
  }

  return (
    <div className={cn(styles.sidebar, [], { [styles.collapsed]: collapse })} data-testid="sidebar-widget">
      <Button
        className={styles['collapse-btn']}
        variant={ButtonVariant.SECONDARY}
        square
        size={ButtonSize.L}
        data-testid="sidebar-collapse-btn"
        onClick={collapseToggle}
      >
        {collapse ? '>' : '<'}
      </Button>
      <div>{t('sidebar')}</div>
    </div>
  )
}

export default Sidebar
