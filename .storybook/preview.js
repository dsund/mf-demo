import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@mfdemo/shared/themes';
import { darkTheme } from '@mfdemo/shared/themes';

import { withThemes } from '@react-theming/storybook-addon';
import { addDecorator } from '@storybook/react';

const themes = [lightTheme, darkTheme];

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const onThemeSwitch = (context) => {
	const { theme } = context;
	const parameters = {
		backgrounds: {
			default: theme.backgroundColor,
		},
	};
	return {
		parameters,
	};
};

addDecorator(withThemes(ThemeProvider, themes, { onThemeSwitch }));
