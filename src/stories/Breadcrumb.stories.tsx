import type { Meta, StoryObj } from '@storybook/react-vite';
import {Breadcrumb} from "../components/Breadcrumb/Breadcrumb.tsx";

const meta: Meta<typeof Breadcrumb> = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <li className="breadcrumb-item">Campus</li>,
      <li className='breadcrumb-item'>
        <a href='https://www.google.com'>Google</a>
      </li>
    ]
  },
};
