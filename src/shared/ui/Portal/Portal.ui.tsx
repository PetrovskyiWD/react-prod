import { createPortal } from 'react-dom'

interface IPortalProps {
  children: React.ReactNode
  element?: HTMLElement
}

const Portal: React.FC<IPortalProps> = ({ children, element = document.body }) => (
   createPortal(children, element)
)

export default Portal
