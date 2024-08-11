import type { Meta, StoryObj } from '@storybook/react'

import Main from './Main.page'

const meta = {
  title: 'pages/Main',
  component: Main,
  argTypes: {}
} satisfies Meta<typeof Main>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export default meta
