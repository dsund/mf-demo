import { makeAutoObservable } from 'mobx';
import React from 'react';

interface Claim {
	type: string;
	value: string;
}

export class UserContextState {
	claims: Claim[] = [];
	constructor() {
		makeAutoObservable(this);
	}

	login = () => {
		window.location.href = '/bff/login';
	};

	getUser = () => {
		let req = new Request('/bff/user', {
			headers: new Headers({
				'X-CSRF': '1',
			}),
		});

		return fetch(req)
			.then((resp) => resp.json())
			.then((data: any[]) => {
				this.claims = data.map((x) => {
					return { type: x.type, value: x.value };
				});
			});
	};
}

export const userState = new UserContextState();
export const UserContext = React.createContext(userState);

// export function useUserContext(): UserStore {
// 	let context = React.useContext(UserContext);
// 	if (context === undefined) {
// 		throw Error('User must be used inside of a UserContext otherwise it will not function correctly.');
// 	}
// 	return context;
// }
