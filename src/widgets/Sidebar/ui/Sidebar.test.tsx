import { fireEvent, screen } from '@testing-library/react'
import Sidebar from './Sidebar.widget'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation'

describe('Sidebar widget:', () => {
  test('load and display', () => {
    renderWithTranslation(<Sidebar />)

    const sidebar = screen.getByTestId('sidebar-widget')

    expect(sidebar).toBeInTheDocument()
    expect(sidebar).not.toHaveClass('collapsed')
  })

  test('collapse toggle', () => {
    renderWithTranslation(<Sidebar />)

    const sidebar = screen.getByTestId('sidebar-widget')
    const toggleBtn = screen.getByTestId('sidebar-collapse-btn')

    fireEvent.click(toggleBtn)
    expect(sidebar).toHaveClass('collapsed')

    fireEvent.click(toggleBtn)
    expect(sidebar).not.toHaveClass('collapsed')
  })
})
