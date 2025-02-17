import { lazy } from 'react'

export const LoginFormAsync = lazy<React.FC>(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./LoginForm.feature'))
      }, 1500)
    })
)
