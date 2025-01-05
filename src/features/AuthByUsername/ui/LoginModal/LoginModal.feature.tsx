import { type FC } from 'react'
import { Modal } from 'shared/ui'
import LoginForm from '../LoginForm/LoginForm.feature'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <LoginForm />
    </Modal>
  )
}

export default LoginModal
