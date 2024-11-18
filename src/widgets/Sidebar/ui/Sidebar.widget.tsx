import { type FC, useState } from 'react'
import { AppLink , Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/classNames/classNames'
import { ButtonSize } from 'shared/ui/Button/Button.ui'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import styles from './Sidebar.module.scss'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

const Sidebar: FC = () => {
  const [collapse, setCollapse] = useState(false)
  const { t } = useTranslation()

  const collapseToggle = (): void => {
    setCollapse((prev) => !prev)
  }

  return (
    <div className={cn(styles.sidebar, [], { [styles.collapsed]: collapse })} data-testid="sidebar-widget">
      <ul>
        <li>
          <AppLink to={RoutePath.main}>{t('home')}</AppLink>
        </li>
        <li>
          <AppLink to={RoutePath.about}>{t('about_us')}</AppLink>
        </li>
      </ul>

      <div className='d-flex flex-column justify-content-center align-items-center g-3'>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    
      <Button
        className={styles['collapse-btn']}
        square
        size={ButtonSize.L}
        data-testid="sidebar-collapse-btn"
        onClick={collapseToggle}
      >
        {collapse ? '>' : '<'}
      </Button>
    </div>
  )
}

export default Sidebar
