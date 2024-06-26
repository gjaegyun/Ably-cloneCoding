import Header from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {},
};
