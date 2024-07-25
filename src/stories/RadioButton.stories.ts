import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioButton from './RadioButton';


const meta: Meta<typeof RadioButton> = {
    title: 'Example/RadioButton',
    component: RadioButton,
    
    parameters: {
        layout: 'centered',
        
    },
    tags: ['autodocs'],
    args: {
        onChange: action('changed'), 
    },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'example',
        value: 'option1',
        label: 'Option 1',
        checked: false,
    },
};

export const Checked: Story = {
    args: {
        name: 'example',
        value: 'checked',
        checked: true,
        onChange: (event) => console.log(event.target.value),
        label: 'Checked Radio Button',
    },
};

export const WithDescription: Story = {
    args: {
        name: 'example',
        value: 'withDescription',
        checked: false,
        onChange: (event) => console.log(event.target.value),
        label: 'Radio Button with Description',
        description: 'This is the description text.',
    },
};

export const Disabled: Story = {
    args: {
        name: 'example',
        value: 'disabled',
        checked: false,
        onChange: (event) => console.log(event.target.value),
        label: 'Disabled Radio Button',
        disabled: true,
    },
};
