/// <reference types="react" />

declare module 'userinfo/UserPage' {
	const UserPage: React.ComponentType;
	export default UserPage;
}

declare module 'components/Button' {
	const Button: React.ComponentType<ButtonProps & any>;
	export default Button;
	interface ButtonProps {
		onClick: () => void;
	}
}
