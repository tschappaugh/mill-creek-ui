import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Hero } from './Hero'

const PlaceholderImage = () => (
  <div className="absolute inset-0 bg-mill-text-secondary" />
)

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    image: <PlaceholderImage />,
    headline: 'Bread Worth Waking Up For',
    subhead: 'Handcrafted in the French tradition since 1986',
    body: 'Organic grains, local dairy, and natural levens — baked fresh every morning in the heart of Shawnee.',
    cta: <Button background="dark">Our Breadmaking Process</Button>,
  },
}

export const WithoutCTA: Story = {
  args: {
    image: <PlaceholderImage />,
    headline: 'Bread Worth Waking Up For',
    subhead: 'Handcrafted in the French tradition since 1986',
    body: 'Organic grains, local dairy, and natural levens — baked fresh every morning in the heart of Shawnee.',
  },
}
