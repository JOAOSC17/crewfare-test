import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import DatePicker from './DatePicker';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'atoms/DatePicker',
  component: DatePicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    selectedRangeString: 'DD/MM/YYY - DD/MM/YYYY',
    selectedRange: { from: undefined, to:  undefined },
    handleDateSelect: fn(),
    showPicker: false,
    setShowPicker: fn()
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    selectedRangeString: '02/01/2025 - 06/01/25',
    selectedRange: {
      from: new Date("2025-01-02T03:00:00.000Z"),
      to: new Date("2025-01-06T03:00:00.000Z")
  }
  }
};
