import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../services/api';
import { createSlug } from '../utils/slug';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CountryBorders from './CountryBorders';
import styled from 'styled-components';

const ContainerRow = styled.div`
	width: auto;
	height: 100%;
	margin: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;

	@media (min-width: 576px) {
		width: 540px;
		margin: 20px auto;
	}
	@media (min-width: 768px) {
		width: 720px;
		margin: 20px auto;
	}
	@media (min-width: 1024px) {
		width: 960px;
		margin: 30px auto;
	}
	@media (min-width: 1280px) {
		width: 1140px;
		margin: 30px auto;
	}
	@media (min-width: 1366px) {
		width: 1280px;
		margin: 60px auto;
	}
`;

const CountryWrapper = styled.div`
	width: 100%;
	margin-top: 60px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

const CountryFlag = styled.img`
	width: 100%;
	height: 100%;

	@media (min-width: 576px) {
		width: 100%;
	}
	@media (min-width: 768px) {
		width: 54%;
	}
	@media (min-width: 1024px) {
		width: 44%;
	}
	@media (min-width: 1280px) {
		width: 44%;
	}
	@media (min-width: 1366px) {
		width: 44%;
	}
`;

const CountryInfo = styled.div`
	width: 100%;

	@media (min-width: 576px) {
		width: 100%;
	}
	@media (min-width: 768px) {
		width: 37%;
	}
	@media (min-width: 1024px) {
		width: 47%;
	}
	@media (min-width: 1280px) {
		width: 47%;
	}
	@media (min-width: 1366px) {
		width: 47%;
	}
`;

const CountryTitle = styled.h2`
	font-size: 36px;
	line-height: 42px;
`;

const CountryListWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	@media (min-width: 576px) {
		flex-direction: row;
	}
	@media (min-width: 768px) {
		flex-direction: column;
	}
	@media (min-width: 1024px) {
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
		width: 100%;
	}
	@media (min-width: 1024px) {
		width: 50%;
	}
	@media (min-width: 1280px) {
		width: 50%;
	}
	@media (min-width: 1366px) {
		width: 50%;
	}
`;

const ButtonWrapper = styled.div`
	width: auto;
	display: flex;
	align-self: flex-start;
	padding: 10px 20px;
	border-radius: 6px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
	background-color: ${({ theme }) => theme.cardBackground};
	transition: all 0.2s ease-in-out;
	cursor: pointer;

	a {
		color: ${({ theme }) => theme.textColor};
	}

	&:hover {
		transform: scale(1.1);
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
		<>
			<ContainerRow>
				<ButtonWrapper>
					<Link to={'/'} title='Back home'>
						<FontAwesomeIcon
							style={{ marginRight: '10px' }}
							icon={faArrowLeft}
						/>
						Back
					</Link>
				</ButtonWrapper>
				{countryData.map(country => (
					<CountryWrapper key={country.name}>
						<CountryFlag src={country.flag} alt={country.name} />
						<CountryInfo>
							<CountryTitle>{country.name}</CountryTitle>
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
										{country.currencies
											.map(currency => currency.name)
											.join(', ')}
									</li>
									<li>
										<span style={{ fontWeight: 800 }}>Languages:</span>{' '}
										{country.languages
											.map(language => language.name)
											.join(', ')}
									</li>
								</CountryList>
							</CountryListWrapper>
							<CountryBorders borderName={country.borders} />
						</CountryInfo>
					</CountryWrapper>
				))}
			</ContainerRow>
		</>
	);
};

export default CountryDetails;
