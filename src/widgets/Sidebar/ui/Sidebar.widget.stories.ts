import type { Meta, StoryObj } from '@storybook/react'

import Sidebar from './Sidebar.widget'

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {}
} satisfies Meta<typeof Sidebar>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export default meta
