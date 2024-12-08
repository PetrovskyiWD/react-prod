import { type FC, useState } from 'react'
import { AppLink , Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'

import { cn } from 'shared/lib/classNames/classNames'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { ButtonSize } from 'shared/ui/Button/Button.ui'
import HomeIcon from 'shared/assets/icons/svg/home-page.svg'
import AboutIcon from 'shared/assets/icons/svg/about-page.svg'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const [collapse, setCollapse] = useState(false)
  const { t } = useTranslation()

  const collapseToggle = (): void => {
    setCollapse((prev) => !prev)
  }

  return (
    <div className={cn(styles.sidebar, [], { [styles.collapsed]: collapse })} data-testid="sidebar-widget">
      <ul className={styles['sidebar-list']}>
        <li>
          <AppLink
            className={styles['sidebar-link']}
            to={RoutePath.main}
          >
            <HomeIcon />
           <span>{t('home')}</span>
          </AppLink>
        </li>
        <li>
          <AppLink
            className={styles['sidebar-link']}
            to={RoutePath.about}
          >
            <AboutIcon />
            <span>{t('about_us')}</span>
          </AppLink>
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
