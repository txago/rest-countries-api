import React from 'react';
import { func, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as farFaMoon } from '@fortawesome/free-regular-svg-icons';
import { faMoon as fasFaMoon } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ToggleButton = styled.button`
	font-family: 'Nunito Sans', sans-serif;
	font-size: 16px;
	font-weight: 600;
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: ${({ theme }) => theme.textColor};
	background-color: ${({ theme }) => theme.cardBackground};
	border: none;
	cursor: pointer;
`;

const moonEnabled = (
	<FontAwesomeIcon style={{ marginRight: '10px' }} icon={fasFaMoon} />
);

const moonDisabled = (
	<FontAwesomeIcon style={{ marginRight: '10px' }} icon={farFaMoon} />
);

const Toggle = ({ theme, toggleTheme }) => {
	const isLight = theme === 'light';

	return (
		<ToggleButton onClick={toggleTheme}>
			{isLight ? moonDisabled : moonEnabled} Dark Mode
		</ToggleButton>
	);
};

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired
};

export default Toggle;
