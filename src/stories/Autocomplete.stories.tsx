import type { Meta, StoryObj } from '@storybook/react-vite';

import { Autocomplete } from '../components/inputFields/Autocomplete/Autocomplete';

const meta: Meta<typeof Autocomplete> = {
  title: 'Molecules/Inputs/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
  args: {
    suggestions: [
      {
        value: '1',
        label: 'label 1'
      },
      {
        value: '2',
        label: 'label 2'
      },
      {
        value: '3',
        label: 'label 3'
      }
    ],
    selected:[
      {
        value: '1',
        label: 'label 1'
      }
    ],
    multiple: true
  }
};



export const single: Story = {
  ...Multiple,
  args: {
    ...Multiple.args,
    multiple: false
  }
};
