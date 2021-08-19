import * as React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Default } from '../Button.stories';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../themes/light';

describe('Button', () => {
	it('renders the button in the primary state', () => {
		render(
			<ThemeProvider theme={lightTheme}>
				<Default {...Default.args} />
			</ThemeProvider>,
		);
		expect(screen.getByRole('button')).toHaveTextContent('Default');
	});
});
