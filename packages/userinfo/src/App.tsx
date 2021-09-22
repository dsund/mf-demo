import * as React from "react";
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@mfdemo/shared/themes';
import { UserPage } from './pages/UserPage';
import { UserContext, userState } from '@mfdemo/shared/src/authentication/UserContext';
import { configure } from 'mobx';
import { observer } from 'mobx-react-lite';
import Button from 'components/Button';

function init(){
  // Enable strict mode for MobX.
  // This disallows state changes outside of an action.
  configure({ enforceActions: 'observed' });
}

init();

//const Button = React.lazy(() => import("components/Button"))

export const App: React.FC = observer(() => {
	return (
		<div>
			<ThemeProvider theme={lightTheme}>
			<UserContext.Provider value={userState}>
				<Button onClick={userState.login}>Login</Button>
				<UserPage />
			</UserContext.Provider >
			</ThemeProvider>
		</div>
	)
});
