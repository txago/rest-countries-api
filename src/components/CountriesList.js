import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CountriesWrapper = styled.div`
	width: 1280px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 80px;
	grid-row-gap: 80px;
`;

const CountriesList = ({ children }) => {
	return (
		<CountriesWrapper>
			<>{children}</>
		</CountriesWrapper>
	);
};

CountriesList.propTypes = {
	children: PropTypes.node.isRequired
};

export default CountriesList;
