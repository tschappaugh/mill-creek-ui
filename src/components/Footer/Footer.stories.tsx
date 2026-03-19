import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const LogoPlaceholder = () => (
  <svg
    width="168"
    height="48"
    viewBox="0 0 168 48"
    fill="none"
    aria-label="Mill Creek Bakery"
  >
    <rect width="168" height="48" rx="4" fill="#614E41" />
    <text
      x="84"
      y="30"
      textAnchor="middle"
      fontFamily="serif"
      fontSize="13"
      fill="#FAF6F1"
    >
      Mill Creek Bakery
    </text>
  </svg>
)

const sampleLinks = [
  { label: 'Our Breads', href: '/breads' },
  { label: 'Our Process', href: '/process' },
  { label: 'Privacy Policy', href: '/privacy' },
]

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof Footer>

export const WithSocialLinks: Story = {
  args: {
    logo: <LogoPlaceholder />,
    links: sampleLinks,
    copyright: '© 2026 Mill Creek Bakery, LLC',
    socialLinks: [
      { platform: 'instagram', href: 'https://instagram.com' },
      { platform: 'pinterest', href: 'https://pinterest.com' },
    ],
  },
}

export const WithoutSocialLinks: Story = {
  args: {
    logo: <LogoPlaceholder />,
    links: sampleLinks,
    copyright: '© 2026 Mill Creek Bakery, LLC',
  },
}
