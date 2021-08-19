import * as React from 'react';
import { Button, ButtonProps } from './Button';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export default {
	title: 'Pearls/Shared/Components/Button',
	component: Button,
} as Meta;

interface StoryButtonProps extends ButtonProps {
	label?: React.ReactNode;
}
const Template: Story<StoryButtonProps> = (args) => <Button {...args}>{args.label} </Button>;

export const Default = Template.bind({});
Default.args = {
	label: 'Default',
	onClick: action('button-click'),
};

export const Primary = Template.bind({});
Primary.args = {
	label: 'Primary',
	type: 'primary',
	onClick: action('button-click'),
};
// export const Large = Template.bind({});
// Large.args = {
//   size: 'lg',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'sm',
//   label: 'Button',
// };
