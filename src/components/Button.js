import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const ButtonWrapper = styled.div`
	width: auto;
	display: flex;
	align-self: flex-start;
	align-items: center;
	padding: 10px 20px;
	border-radius: 6px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme }) => theme.cardBackground};
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	color: ${({ theme }) => theme.textColor};

	&:hover {
		transform: scale(1.1);
	}
`;

const Button = ({ children }) => {
	return <ButtonWrapper>{children}</ButtonWrapper>;
};

Button.propTypes = {
	children: node.isRequired
};

export default Button;
