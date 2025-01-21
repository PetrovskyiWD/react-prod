import ComponentRender from 'shared/lib/tests/ComponentRender'
import Navbar from './Navbar.widget'

describe('Navbar widget:', () => {
  it('load and display', () => {
    const { getByTestId } = ComponentRender(<Navbar />)

    expect(getByTestId('navbar-widget')).toBeInTheDocument()
  })
})
