import type { Meta, StoryObj } from '@storybook/react'

import LanguageSwitcher from './LanguageSwitcher.widget'

const meta = {
  title: 'widget/LanguageSwitcher',
  component: LanguageSwitcher,
  argTypes: {}
} satisfies Meta<typeof LanguageSwitcher>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export default meta
