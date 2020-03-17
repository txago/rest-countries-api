import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SearchInput = styled.input`
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
	padding: 10px 20px 10px 50px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	border: none;
	border-radius: 6px;

	::placeholder {
		color: ${({ theme }) => theme.textColor};
		opacity: 0.5;
	}

	@media (min-width: 576px) {
		width: 320px;
	}
	@media (min-width: 768px) {
		width: 300px;
	}
	@media (min-width: 1024px) {
		width: 400px;
	}
`;

const SearchFilter = props => {
	const { ...rest } = props;

	return (
		<>
			<SearchInput {...rest} placeholder='Search for a country...' />
			<FontAwesomeIcon
				style={{ position: 'absolute', top: 16, left: 20, opacity: 0.5 }}
				icon={faSearch}
			/>
		</>
	);
};

export default SearchFilter;
