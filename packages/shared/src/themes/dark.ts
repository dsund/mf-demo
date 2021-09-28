import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import { Theme } from './theme';
import { defaultTheme } from './defaultTheme';

export const darkTheme: Theme = merge(cloneDeep(defaultTheme), {
	name: 'dark',
	isDark: true,
	backgroundColor: '#141414',
	button: {
		default: {
			color: 'rgba(255, 255, 255, 0.65)',
			backgroundColor: 'transparent',
			borderColor: '#434343',
			borderRadius: '2px',
			hover: {
				color: '#40a9ff',
				backgroundColor: 'transparent',
				borderColor: '#40a9ff',
			},
			focus: {
				color: '#40a9ff',
				backgroundColor: 'transparent',
				borderColor: '#40a9ff',
			},
			active: {
				color: '#096dd9',
				backgroundColor: 'transparent',
				borderColor: '#096dd9',
			},
		},
		primary: {
			color: '#fff',
			backgroundColor: '#1890ff',
			borderColor: '#1890ff',
			borderRadius: '1px',
			hover: {
				color: '#fff',
				backgroundColor: '#40a9ff',
				borderColor: '#40a9ff',
			},
			focus: {
				color: '#fff',
				backgroundColor: '#40a9ff',
				borderColor: '#40a9ff',
			},
			active: {
				color: '#fff',
				backgroundColor: '#096dd9',
				borderColor: '#096dd9',
			},
		},
	},
	checkbox: {
		backgroundColor: 'transparent',
	},
	navbar: {},
});
