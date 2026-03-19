import type { Meta, StoryObj } from '@storybook/react'
import { ContentHeader } from './ContentHeader'

const meta: Meta<typeof ContentHeader> = {
  title: 'Components/ContentHeader',
  component: ContentHeader,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ContentHeader>

const heading = 'Our Breads'
const subtext = 'Baked fresh five days a week in the French tradition'
const body = 'From naturally leavened sourdough to buttery croissants, every loaf and pastry is made with organic ingredients sourced from local farms and producers we trust.'

export const H1WithSubtext: Story = {
  args: { level: 'h1', heading, subtext, body },
}

export const H1WithoutSubtext: Story = {
  args: { level: 'h1', heading, body },
}

export const H2WithSubtext: Story = {
  args: { level: 'h2', heading, subtext, body },
}

export const H2WithoutSubtext: Story = {
  args: { level: 'h2', heading, body },
}
