export interface IButtonTheme {
	color: string;
	backgroundColor: string;
	borderColor: string;
	borderRadius: string;
	hover: {
		color: string;
		backgroundColor: string;
		borderColor: string;
	};
	focus: {
		color: string;
		backgroundColor: string;
		borderColor: string;
	};
	active: {
		color: string;
		borderColor: string;
		backgroundColor: string;
	};
}

export interface Theme {
	name: string;
	isDark: boolean;
	backgroundColor: string;
	button: {
		default: IButtonTheme;
		primary: IButtonTheme;
	};

	checkbox: {
		backgroundColor: string;
		borderColor: string;
		checked: {
			backgroundColor: string;
			borderColor: string;
		};
	};
}
