import React from 'react';
import styled from 'styled-components';
import { func, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as farFaMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as fasFaMoon } from '@fortawesome/free-solid-svg-icons';

const moonEnabled = (
	<FontAwesomeIcon style={{ marginRight: '10px' }} icon={fasFaMoon} />
);
const moonDisabled = (
	<FontAwesomeIcon style={{ marginRight: '10px' }} icon={farFaMoon} />
);

const ToggleContainer = styled.a`
	color: ${({ theme }) => theme.textColor};
	display: flex;
	border: none;
	margin: 0;
	padding: 0;
	font-size: 14px;
	cursor: pointer;
	font-family: 'Nunito Sans', sans-serif;
`;

const Toggle = ({ theme, toggleTheme }) => {
	const isLight = theme === 'light';
	return (
		<ToggleContainer onClick={toggleTheme}>
			{isLight ? moonEnabled : moonDisabled} Dark Mode
		</ToggleContainer>
	);
};

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired
};

export default Toggle;
