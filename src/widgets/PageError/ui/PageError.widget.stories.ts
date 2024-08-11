import type { Meta, StoryObj } from '@storybook/react'

import PageError from './PageError.widget'

const meta = {
  title: 'widget/PageError',
  component: PageError,
  argTypes: {}
} satisfies Meta<typeof PageError>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export default meta
