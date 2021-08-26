import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '@mfdemo/components/components';
import { lightTheme } from '@mfdemo/components/Themes';


const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<Button onClick={() => console.log('clicketi klick!')}>Button 1</Button>
		</ThemeProvider>
	);
};

export default App;
