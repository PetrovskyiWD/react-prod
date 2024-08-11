import type { Meta, StoryObj } from '@storybook/react'

import About from './About.page'

const meta = {
  title: 'pages/About',
  component: About,
  argTypes: {}
} satisfies Meta<typeof About>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export default meta
