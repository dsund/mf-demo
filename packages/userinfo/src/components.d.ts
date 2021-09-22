/// <reference types="react" />

declare module 'components/Button' {
	const Button: React.ComponentType<ButtonProps & any>;
	export default Button;
	interface ButtonProps {
		onClick: () => void;
	}
}
