import { Theme } from './theme';

export const defaultTheme: Theme = {
	name: 'DEFAULT',
	isDark: false,
	backgroundColor: '#fff',
	button: {
		default: {
			color: 'rgba(0, 0, 0, 0.85)',
			backgroundColor: '#fff',
			borderColor: '#d9d9d9',
			borderRadius: '1px',
			hover: {
				color: '#40a9ff',
				backgroundColor: '#fff',
				borderColor: '#40a9ff',
			},
			focus: {
				color: '#40a9ff',
				backgroundColor: '#fff',
				borderColor: '#40a9ff',
			},
			active: {
				color: '#096dd9',
				backgroundColor: '#fff',
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
		backgroundColor: '#fff',
		borderColor: '#1890ff',
		checked: {
			backgroundColor: '#1890ff',
			borderColor: '#1890ff',
		},
	},
};
