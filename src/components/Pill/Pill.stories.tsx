import type { Meta, StoryObj } from '@storybook/react'
import { Pill } from './Pill'

const meta: Meta<typeof Pill> = {
  title: 'Components/Pill',
  component: Pill,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Pill>

export const Default: Story = {
  args: {
    label: 'Baguette',
    active: false,
  },
}

export const Active: Story = {
  args: {
    label: 'Baguette',
    active: true,
  },
}
