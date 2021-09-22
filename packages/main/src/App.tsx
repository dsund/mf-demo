import * as React from "react";
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@mfdemo/shared/themes';
import { UserContext, userState } from '@mfdemo/shared/src/authentication/UserContext';
import { configure } from 'mobx';
import { observer } from 'mobx-react-lite';
import Button from 'components/Button';
// import UserPage from 'userinfo/UserPage';

function init(){
  // Enable strict mode for MobX.
  // This disallows state changes outside of an action.
  configure({ enforceActions: 'observed' });
}

init();

const UserPage = React.lazy(() => import("userinfo/UserPage"));

export const App: React.FC = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<UserContext.Provider value={userState}>
				<h1>Main application</h1>
				<Button onClick={userState.login}>Login</Button>
				<React.Suspense fallback="loading">
					<UserPage />
				</React.Suspense>
			</UserContext.Provider >
		</ThemeProvider> 
	);
}