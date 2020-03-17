import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Select = styled.select`
	font-family: 'Nunito Sans', sans-serif;
	font-size: 14px;
	line-height: 18px;
	color: ${({ theme }) => theme.textColor};
	width: 100%;
	height: 50px;
	position: relative;
	background-color: ${({ theme }) => theme.cardBackground};
	background-position: 10px 10px;
	background-repeat: no-repeat;
	padding: 10px 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	border: none;
	border-radius: 6px;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;

	@media (min-width: 576px) {
		width: 200px;
	}
`;

const SelectFilter = props => {
	const { region, ...rest } = props;

	return (
		<>
			<Select {...rest}>
				<option value='' defaultValue>
					Filter by Region
				</option>
				<option value='Africa'>Africa</option>
				<option value='America'>America</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
			</Select>
			<FontAwesomeIcon
				style={{ position: 'absolute', top: 17, right: 20, opacity: 0.5 }}
				icon={faChevronDown}
			/>
		</>
	);
};

export default SelectFilter;
