import { FC, useState } from 'react'
import { cn } from 'shared/lib/classNames'

import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapse, setCollapse] = useState(false)

  const collapseToggle = () => setCollapse(prev => !prev)

  return (
    <div className={cn(cls.sidebar, [className], { [cls.collapsed]: collapse })}>
      <button onClick={collapseToggle}>toggle</button>
      <div>
        Sidebar
      </div>
    </div>
  )
}

export default Sidebar
