import type { Meta, StoryObj } from '@storybook/react'

import ThemeSwitcher from './ThemeSwitcher.widget'

const meta = {
  title: 'widget/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {}
} satisfies Meta<typeof ThemeSwitcher>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export default meta
