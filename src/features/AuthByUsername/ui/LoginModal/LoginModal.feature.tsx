import { Suspense, type FC } from 'react'
import { Loader, Modal } from 'shared/ui'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}

export default LoginModal
