import React from 'react';
import styled from 'styled-components';

import CountryBorders from './CountryBorders';

const CountryFlag = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	@media (min-width: 768px) {
		width: 60%;
	}
	@media (min-width: 1024px) {
		width: 44%;
	}
`;

const CountryInfo = styled.div`
	width: 100%;

	@media (min-width: 768px) {
		width: 60%;
	}
	@media (min-width: 1024px) {
		width: 47%;
	}
`;

const CountryListWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media (min-width: 576px) {
		flex-direction: row;
	}
`;

const CountryList = styled.ul`
	width: 100%;
	margin: 0;
	padding: 0;
	line-height: 30px;
	list-style: none;

	@media (min-width: 576px) {
		width: 100%;
	}
	@media (min-width: 768px) {
		width: 50%;
	}
`;

const CountryData = props => {
	const {
		flag,
		name,
		nativeName,
		population,
		region,
		subregion,
		capital,
		topLevelDomain,
		currencies,
		languages,
		borders,
		...rest
	} = props;

	return (
		<>
			<CountryFlag src={flag} alt={name} />
			<CountryInfo>
				<h2>{name}</h2>
				<CountryListWrapper>
					<CountryList {...rest}>
						<li>
							<span style={{ fontWeight: 800 }}>Native Name:</span> {nativeName}
						</li>
						<li>
							<span style={{ fontWeight: 800 }}>Population:</span>{' '}
							{population.toLocaleString()}
						</li>
						<li>
							<span style={{ fontWeight: 800 }}>Region:</span> {region}
						</li>
						<li>
							<span style={{ fontWeight: 800 }}>Sub Region:</span> {subregion}
						</li>
						<li>
							<span style={{ fontWeight: 800 }}>Capital:</span> {capital}
						</li>
					</CountryList>
					<CountryList {...rest}>
						<li>
							<span style={{ fontWeight: 800 }}>Top Level Domain:</span>{' '}
							{topLevelDomain}
						</li>
						<li>
							<span style={{ fontWeight: 800 }}>Currencies:</span>{' '}
							{currencies.map(currency => currency.name).join(', ')}
						</li>
						<li>
							<span style={{ fontWeight: 800 }}>Languages:</span>{' '}
							{languages.map(language => language.name).join(', ')}
						</li>
					</CountryList>
				</CountryListWrapper>{' '}
				{borders.length > 0 ? (
					<CountryBorders borderName={borders} />
				) : (
					<p style={{ margin: '30px 0', fontWeight: 800 }}>
						This country has no borders.
					</p>
				)}
			</CountryInfo>
		</>
	);
};

export default CountryData;
