import type { Meta, StoryObj } from '@storybook/react'

import NotFound from './NotFound.page'

const meta = {
  title: 'pages/NotFound',
  component: NotFound,
  argTypes: {}
} satisfies Meta<typeof NotFound>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export default meta
