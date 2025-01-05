import { render } from '@testing-library/react'
import Input from './Input.ui'

describe('Input shared component:', () => {
  it('should load and display', () => {
    const { getByPlaceholderText } = render(<Input placeholder='Username' />)

    expect(getByPlaceholderText('Username')).toBeInTheDocument()
  })
})
