import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardWrapper = styled.div`
	border-radius: 6px;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
	font-size: 14px;
	background-color: ${({ theme }) => theme.cardBackground};
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
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

const CardTitle = styled.h2`
	color: ${({ theme }) => theme.textColor};
	margin-bottom: 20px;
`;

const CardParagraph = styled.p`
	color: ${({ theme }) => theme.textColor};
`;

const Card = ({ flag, name, population, region, capital }) => {
	return (
		<CardWrapper>
			<FlagWrapper src={flag} />
			<CardDetails>
				<CardTitle>{name}</CardTitle>
				<CardParagraph>
					<span style={{ fontWeight: 600 }}>Population:</span> {population}
				</CardParagraph>
				<CardParagraph>
					<span style={{ fontWeight: 600 }}>Region:</span> {region}
				</CardParagraph>
				<CardParagraph>
					<span style={{ fontWeight: 600 }}>Capital:</span> {capital}
				</CardParagraph>
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
