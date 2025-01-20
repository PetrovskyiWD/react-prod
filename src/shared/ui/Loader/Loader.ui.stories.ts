import type { Meta, StoryObj } from '@storybook/react'

import Loader, { LoaderSize } from './Loader.ui'

const meta = {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {}
} satisfies Meta<typeof Loader>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: LoaderSize.L
  }
}

export const Medium: Story = {
  args: {
    size: LoaderSize.M
  }
}

export const Small: Story = {
  args: {
    size: LoaderSize.S
  }
}

export default meta
