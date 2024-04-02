import { type FC, useState } from 'react'

import { cn } from 'shared/lib/classNames'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
  const [collapse, setCollapse] = useState(false)

  const collapseToggle = (): void => { setCollapse(prev => !prev) }

  return (
    <div className={cn(styles.sidebar as string, [], { [styles.collapsed]: collapse })}>
      <button onClick={collapseToggle}>toggle</button>
      <div>
        Sidebar
      </div>
    </div>
  )
}

export default Sidebar
