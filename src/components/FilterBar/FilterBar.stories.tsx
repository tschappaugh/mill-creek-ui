import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FilterBar } from './FilterBar'

const categories = ['Sourdough', 'Baguettes', 'Pastries', 'Seasonal']

const meta: Meta<typeof FilterBar> = {
  title: 'Components/FilterBar',
  component: FilterBar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof FilterBar>

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState<string | null>(null)
    return (
      <FilterBar
        categories={categories}
        active={active}
        onChange={setActive}
      />
    )
  },
}

export const WithActiveCategory: Story = {
  render: () => {
    const [active, setActive] = useState<string | null>('Sourdough')
    return (
      <FilterBar
        categories={categories}
        active={active}
        onChange={setActive}
      />
    )
  },
}
