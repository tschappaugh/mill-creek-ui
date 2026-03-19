import type { Meta, StoryObj } from '@storybook/react'
import { Panel } from './Panel'

const meta: Meta<typeof Panel> = {
  title: 'Components/Panel',
  component: Panel,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Panel>

export const Default: Story = {
  args: {
    children: (
      <div>
        <h2 className="font-['Cormorant_Garamond'] text-[32px] font-light mb-4">
          Locally Sourced. Thoughtfully Made.
        </h2>
        <p className="mb-3">
          Every loaf we bake starts with ingredients we trust — sourced from farms and producers within our region who share our commitment to quality. List:
        </p>
        <ul className="list-disc pl-5">
          <li>Organic flour from Marion Milling Co., Kansas City</li>
          <li>Fresh dairy from Shatto Dairy, Missouri</li>
          <li>Eggs from 2 Birds Farm</li>
          <li>Spring water from Shawnee's original Gum Springs</li>
        </ul>
      </div>
    ),
  },
}
