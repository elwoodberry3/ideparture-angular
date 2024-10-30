/**
 * ATOM : INPUT
 * iDeparture Design System v.3.0.1 
 */

import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';
import { InputComponentArgs } from '../../../assets/interfaces/input-component-args';

const meta: Meta<InputComponentArgs> = {
  title: 'Atoms/Input',
  component: InputComponent,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text...',
    value: '',
    disabled: false,
  },
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  parameters: {
    actions: {
      handles: ['input'],
    },
  },
};

export default meta;
type Story = StoryObj<InputComponentArgs>;

// Default state of the Input component
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    value: '',
    disabled: false,
  },
};

// Input component with pre-filled text
export const Filled: Story = {
  args: {
    placeholder: 'Enter text...',
    value: 'Filled in!',
    disabled: false,
  },
};

// Disabled state for the Input component
export const Disabled: Story = {
  args: {
    placeholder: 'Can’t type here...',
    value: '',
    disabled: true,
  },
};

// Interactive input with action logging for testing dynamic user input
export const Interactive: Story = {
  args: {
    placeholder: 'Type here...',
    value: '',
  },
  argTypes: {
    value: { control: 'text' },
  },
  parameters: {
    actions: {
      handles: ['input'],
    },
  },
};
