import type { Meta, StoryObj } from '@storybook/react'

import Navbar from './Navbar.widget'

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  argTypes: {}
} satisfies Meta<typeof Navbar>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export default meta
