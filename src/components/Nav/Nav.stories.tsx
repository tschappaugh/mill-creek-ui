import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { ArrowUpRight } from '../../icons/ArrowUpRight'
import { Nav } from './Nav'

const LogoPlaceholder = () => (
  <svg
    width="168"
    height="48"
    viewBox="0 0 168 48"
    fill="none"
    aria-label="Mill Creek Bakery"
  >
    <rect width="168" height="48" rx="4" fill="#F2EBE1" />
    <text
      x="84"
      y="30"
      textAnchor="middle"
      fontFamily="serif"
      fontSize="13"
      fill="#614E41"
    >
      Mill Creek Bakery
    </text>
  </svg>
)

const sampleLinks = [
  { label: 'Our Breads', href: '/breads' },
  { label: 'Our Process', href: '/process' },
]

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="min-h-[300px]">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Nav>

export const WithCTA: Story = {
  args: {
    logo: <LogoPlaceholder />,
    links: sampleLinks,
    cta: (
      <Button icon={<ArrowUpRight />}>Newsletter</Button>
    ),
  },
}

export const WithoutCTA: Story = {
  args: {
    logo: <LogoPlaceholder />,
    links: sampleLinks,
  },
}
