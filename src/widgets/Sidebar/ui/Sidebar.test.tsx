import { fireEvent, screen } from '@testing-library/react'
import Sidebar from './Sidebar.widget'
import ComponentRender from 'shared/lib/tests/ComponentRender'

describe('Sidebar widget:', () => {
  test('load and display', () => {
    ComponentRender(<Sidebar />)

    const sidebar = screen.getByTestId('sidebar-widget')

    expect(sidebar).toBeInTheDocument()
    expect(sidebar).not.toHaveClass('collapsed')
  })

  test('collapse toggle', () => {
    ComponentRender(<Sidebar />)

    const sidebar = screen.getByTestId('sidebar-widget')
    const toggleBtn = screen.getByTestId('sidebar-collapse-btn')

    fireEvent.click(toggleBtn)
    expect(sidebar).toHaveClass('collapsed')

    fireEvent.click(toggleBtn)
    expect(sidebar).not.toHaveClass('collapsed')
  })
})
