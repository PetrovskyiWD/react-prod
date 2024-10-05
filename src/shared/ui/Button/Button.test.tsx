import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button, { ButtonVariant } from './Button.ui'

describe('Button component:', () => {
  test('load and display', () => {
    render(<Button>{'Click me!'}</Button>)

    expect(screen.getByText('Click me!')).toBeInTheDocument()
  })

  test('should have "clear" class', () => {
    render(<Button variant={ButtonVariant.CLEAR}>{'Click me!'}</Button>)

    expect(screen.getByText('Click me!')).toHaveClass('clear')
  })
})
