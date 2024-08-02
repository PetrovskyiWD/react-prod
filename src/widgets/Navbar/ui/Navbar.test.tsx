import { render, screen } from '@testing-library/react'
import Navbar from './Navbar.widget'

describe('Navbar widget:', () => {
  test('load and display', () => {
    render(<Navbar />)

    expect(screen.getByTestId('navbar-widget')).toBeInTheDocument()
  })
})
