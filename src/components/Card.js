import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
	border-radius: 6px;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
	font-size: 14px;
	background-color: ${({ theme }) => theme.cardBackground};
`;

const FlagWrapper = styled.img`
	border-radius: 6px 6px 0 0;
	display: flex;
	width: 100%;
	background-color: ${({ theme }) => theme.cardBackground};
	border-bottom: 1px solid ${({ theme }) => theme.themeButtonBackground};
`;

const CardDetails = styled.div`
	padding: 10px 20px 20px;
	line-height: 10px;
`;

const Card = ({ flag, name, population, region, capital }) => {
	return (
		<CardWrapper>
			<FlagWrapper src={flag} />
			<CardDetails>
				<h2 style={{ marginBottom: '30px' }}>{name}</h2>
				<p>
					<span style={{ fontWeight: 600 }}>Population:</span> {population}
				</p>
				<p>
					<span style={{ fontWeight: 600 }}>Region:</span> {region}
				</p>
				<p>
					<span style={{ fontWeight: 600 }}>Capital:</span> {capital}
				</p>
			</CardDetails>
		</CardWrapper>
	);
};

Card.propTypes = {
	flag: PropTypes.node.isRequired,
	name: PropTypes.node.isRequired,
	population: PropTypes.node.isRequired,
	region: PropTypes.node.isRequired,
	capital: PropTypes.node.isRequired
};

export default Card;
