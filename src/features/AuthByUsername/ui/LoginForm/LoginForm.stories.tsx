import type { Meta, StoryObj } from '@storybook/react'

import LoginForm from './LoginForm.feature'

export default { component: LoginForm }
const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {}
} satisfies Meta<typeof LoginForm>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
