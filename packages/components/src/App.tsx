import * as React from "react";
import { ThemeProvider } from 'styled-components';
import { Button } from './Button/Button';
import { lightTheme } from '../../shared/src/themes/light';

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Button>Button</Button>
		</ThemeProvider>
	);
};

export default App;