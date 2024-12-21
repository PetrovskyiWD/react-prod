import type { Meta, StoryObj } from '@storybook/react'

import Modal from './Modal.ui'

const meta = {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {}
} satisfies Meta<typeof Modal>

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sapiente neque eligendi.'
  }
}

export default meta
