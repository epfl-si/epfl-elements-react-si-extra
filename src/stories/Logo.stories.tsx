import type { Meta, StoryObj } from '@storybook/react-vite';
import {Logo} from "../components/Logo/Logo.tsx";

const meta: Meta<typeof Logo> = {
  title: 'Molecules/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithParams: Story = {
  args: {
    logoUrl: 'https://www.google.com/',
    alt: "EPFL",
    target: '_blanc'
  }
};
