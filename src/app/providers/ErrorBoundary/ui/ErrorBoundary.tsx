import { Component, type ErrorInfo, type ReactNode } from 'react'

import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError (): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    console.log(error, info.componentStack)
  }

  render (): ReactNode {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) return <PageError />

    return children
  }
}

export default ErrorBoundary
