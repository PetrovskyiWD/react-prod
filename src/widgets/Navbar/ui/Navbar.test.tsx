import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './Navbar.widget'

describe('Navbar widget:', () => {
  test('load and display', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    expect(screen.getByTestId('navbar-widget')).toBeInTheDocument()
  })
})
