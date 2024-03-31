import { FC, useState } from 'react'

import { cn } from 'shared/lib/classNames'

import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapse, setCollapse] = useState(false)

  const collapseToggle = () => setCollapse(prev => !prev)

  return (
    <div className={cn(styles.sidebar, [className], { [styles.collapsed]: collapse })}>
      <button onClick={collapseToggle}>toggle</button>
      <div>
        Sidebar
      </div>
    </div>
  )
}

export default Sidebar
