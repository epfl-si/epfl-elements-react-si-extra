import type { Meta, StoryObj } from '@storybook/react-vite';
import { FormCard } from '../components/FormCard/FormCard';

const meta = {
    title: 'Molecules/FormCard',
    component: FormCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FormCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Test default',
        icon: '#trash-2',
        children: [
            <div>
                <strong>VPO-SI</strong>
                <br />
                <small className="text-muted">Cosec: Tonfio Caval, Ivo Steiner</small>
                <br />
                <small className="text-muted">Prof: Lorezo Ciccio</small>
            </div>
        ],
        keyValue: 'test'
    },
};
