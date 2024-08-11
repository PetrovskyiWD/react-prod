import type { Meta, StoryObj } from '@storybook/react'

import PageLoader from './PageLoader.widget'

const meta = {
  title: 'widget/PageLoader',
  component: PageLoader,
  argTypes: {}
} satisfies Meta<typeof PageLoader>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export default meta
