import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import Input from './Input.ui'

const meta = {
  title: 'shared/Input',
  component: Input,
  argTypes: {},
  args: { onClick: fn() }
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type here...'
  }
}


export default meta
