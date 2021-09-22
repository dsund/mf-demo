import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';
import { Theme } from './theme';
import { defaultTheme } from './defaultTheme';

export const lightTheme: Theme = merge(cloneDeep(defaultTheme), {
	name: 'light',
	button: {
		default: {
			borderRadius: '2px',
		}
	}
});
