import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Button, { ButtonVariants } from './Button.ui'

const meta = {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button'
  }
}

export const Clear: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariants.CLEAR
  }
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariants.OUTLINE
  }
}

export default meta
