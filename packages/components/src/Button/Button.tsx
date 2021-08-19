import * as React from "react";
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { IButtonTheme, Theme } from '../themes/theme';
import { Button as AntButton } from 'antd';
import 'antd/dist/antd.css';

export interface ButtonProps {
	type?: 'default' | 'primary';
	href?: string | undefined;
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
	const theme: Theme = useContext(ThemeContext);
	let buttonTheme: IButtonTheme = theme.button.default;
	if (props.type?.toString() == 'primary') {
		buttonTheme = theme.button.primary;
	} else {
		buttonTheme = theme.button.default;
	}
	
	return (
		<StyledButton theme={buttonTheme} {...props}>
			{props.children}
		</StyledButton>
	);
};

export interface StyledButtonProps extends ButtonProps {
	theme: IButtonTheme;
}

const StyledButton = styled((props) => <AntButton {...props} />)`
	color: ${(props) => props.theme.color};
	background: ${(props) => props.theme.backgroundColor};
	border-color: ${(props) => props.theme.borderColor};
	border-radius: ${(props) => props.theme.borderRadius};
	:hover {
		color: ${(props) => props.theme.hover.color};
		background: ${(props) => props.theme.hover.backgroundColor};
		border-color: ${(props) => props.theme.hover.borderColor};
	}
	:focus {
		color: ${(props) => props.theme.focus.color};
		background: ${(props) => props.theme.focus.backgroundColor};
		border-color: ${(props) => props.theme.focus.borderColor};
	}
	:active {
		color: ${(props) => props.theme.active.color};
		background: ${(props) => props.theme.active.backgroundColor};
		border-color: ${(props) => props.theme.active.borderColor};
	}
`;

// Button.propTypes = {
// 	children: PropTypes.node.isRequired,
// };
export default Button;