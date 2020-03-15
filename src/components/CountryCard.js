import React from 'react';
import styled from 'styled-components';
import { string, number } from 'prop-types';

const CardWrapper = styled.div`
	font-size: 14px;
	border-radius: 6px;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
	background-color: ${({ theme }) => theme.cardBackground};
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

const FlagWrapper = styled.img`
	width: 100%;
	height: auto;
	display: flex;
	object-fit: cover;
	border-radius: 6px 6px 0 0;
	background-color: ${({ theme }) => theme.cardBackground};
	border-bottom: 1px solid ${({ theme }) => theme.background};

	@media (min-width: 576px) {
		height: 160px;
	}
	@media (min-width: 768px) {
		height: 140px;
	}
	@media (min-width: 1280px) {
		height: 160px;
	}
`;

const CardDetails = styled.div`
	padding: 10px 20px 20px;
	line-height: 10px;
`;

const CardTitle = styled.h3`
	width: auto;

	@media (min-width: 576px) {
		width: 220px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	@media (min-width: 768px) {
		width: 180px;
	}
	@media (min-width: 1024px) {
		width: 170px;
	}
	@media (min-width: 1280px) {
		width: 200px;
	}
	@media (min-width: 1366px) {
		width: 200px;
	}
`;

const CardParagraph = styled.p`
	color: ${({ theme }) => theme.textColor};
`;

const CountryCard = ({ flag, name, population, region, capital }) => {
	return (
		<CardWrapper>
			<FlagWrapper src={flag} title={name} />
			<CardDetails>
				<CardTitle>{name}</CardTitle>
				<CardParagraph>
					<span style={{ fontWeight: 600 }}>Population:</span>{' '}
					{population.toLocaleString()}
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

CountryCard.propTypes = {
	flag: string.isRequired,
	name: string.isRequired,
	population: number.isRequired,
	region: string.isRequired,
	capital: string.isRequired
};

export default CountryCard;
