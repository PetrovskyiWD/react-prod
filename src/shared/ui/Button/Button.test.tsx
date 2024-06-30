import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Button from './Button.ui'

describe('Button component', () => {
  test('Load and display the Button', () => {
    render(<Button>{'My button'}</Button>)

    const buttonElement = screen.getByText('My button')

    expect(buttonElement).toBeInTheDocument()
  })
})
