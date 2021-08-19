import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'component-app/Button';
import { lightTheme } from 'component-app/Themes';


const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Button onClick={() => console.log('clicketi klick!')}>Button 1</Button>
		</ThemeProvider>
	);
};

export default App;
