import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../services/api';
import { createSlug } from '../utils/slug';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Button from './Button';
import CountryBorders from './CountryBorders';

const ContainerRow = styled.div`
	width: auto;
	height: 100%;
	margin: 20px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media (min-width: 576px) {
		width: 540px;
		margin: 20px auto;
	}
	@media (min-width: 768px) {
		width: 720px;
	}
	@media (min-width: 1024px) {
		width: 960px;
		margin: 30px auto;
	}
	@media (min-width: 1280px) {
		width: 1140px;
	}
	@media (min-width: 1366px) {
		width: 1280px;
		margin: 60px auto;
	}
`;

const CountryWrapper = styled.div`
	width: 100%;
	margin-top: 30px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: start;

	@media (min-width: 1024px) {
		margin-top: 60px;
		justify-content: space-between;
	}
`;

const CountryFlag = styled.img`
	width: 100%;
	height: 100%;
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

const CountryDetails = urlParam => {
	const countryName = urlParam.match.params.name;
	const [countryData, setCountryData] = useState([]);

	useEffect(() => {
		fetchCountries().then(json => {
			setCountryData(
				json.filter(
					country => createSlug(country.name).toLowerCase() === countryName
				)
			);
		});
	}, [countryName]);

	return (
		<ContainerRow>
			<Link to={'../'} title={'Back home'}>
				<Button>
					<FontAwesomeIcon style={{ marginRight: '10px' }} icon={faArrowLeft} />
					Back
				</Button>
			</Link>
			{countryData.map(country => (
				<CountryWrapper key={country.name}>
					<CountryFlag src={country.flag} alt={country.name} />
					<CountryInfo>
						<h2>{country.name}</h2>
						<CountryListWrapper>
							<CountryList>
								<li>
									<span style={{ fontWeight: 800 }}>Native Name:</span>{' '}
									{country.nativeName}
								</li>
								<li>
									<span style={{ fontWeight: 800 }}>Population:</span>{' '}
									{country.population.toLocaleString()}
								</li>
								<li>
									<span style={{ fontWeight: 800 }}>Region:</span>{' '}
									{country.region}
								</li>
								<li>
									<span style={{ fontWeight: 800 }}>Sub Region:</span>{' '}
									{country.subregion}
								</li>
								<li>
									<span style={{ fontWeight: 800 }}>Capital:</span>{' '}
									{country.capital}
								</li>
							</CountryList>
							<CountryList>
								<li>
									<span style={{ fontWeight: 800 }}>Top Level Domain:</span>{' '}
									{country.topLevelDomain}
								</li>
								<li>
									<span style={{ fontWeight: 800 }}>Currencies:</span>{' '}
									{country.currencies.map(currency => currency.name).join(', ')}
								</li>
								<li>
									<span style={{ fontWeight: 800 }}>Languages:</span>{' '}
									{country.languages.map(language => language.name).join(', ')}
								</li>
							</CountryList>
						</CountryListWrapper>
						{country.borders.length > 0 ? (
							<CountryBorders borderName={country.borders} />
						) : (
							<p style={{ fontWeight: 800 }}>This country has no borders.</p>
						)}
					</CountryInfo>
				</CountryWrapper>
			))}
		</ContainerRow>
	);
};

export default CountryDetails;
