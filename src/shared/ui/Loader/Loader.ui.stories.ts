import type { Meta, StoryObj } from '@storybook/react'

import Loader from './Loader.ui'

const meta = {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {}
} satisfies Meta<typeof Loader>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export default meta
