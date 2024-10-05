import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Button, { ButtonSize, ButtonVariant } from './Button.ui'

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

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.SECONDARY,
    children: 'Button'
  }
}

export const Clear: Story = {
  args: {
    children: 'Button',
    variant: ButtonVariant.CLEAR
  }
}

export const Square: Story = {
  args: {
    children: '>',
    square: true
  }
}

export const SquareL: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.L
  }
}

export const SquareXl: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.XL
  }
}

export default meta
