import type { Meta, StoryObj } from '@storybook/react'

import AppLink, { AppLinkVariants } from './AppLink.ui'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {},
  args: { to: '/', children: 'Link' }
} satisfies Meta<typeof AppLink>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: AppLinkVariants.PRIMARY
  }
}

export const Secondary: Story = {
  args: {
    variant: AppLinkVariants.SECONDARY
  }
}

export default meta
