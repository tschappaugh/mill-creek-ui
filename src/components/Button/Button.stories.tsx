import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ArrowUpRight } from '../../icons/ArrowUpRight'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Visit our Breads',
    background: 'light',
  },
}

export const Dark: Story = {
  args: {
    children: 'Visit our Breads',
    background: 'dark',
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Visit our Breads',
    background: 'light',
    icon: <ArrowUpRight />,
  },
}

export const DarkWithIcon: Story = {
  args: {
    children: 'Visit our Breads',
    background: 'dark',
    icon: <ArrowUpRight />,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Visit our Breads',
    background: 'light',
    disabled: true,
  },
}
