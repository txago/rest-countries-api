import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../services/api';
import { createSlug } from '../utils/slug';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import CountryCard from './CountryCard';

const ContainerRow = styled.div`
	margin: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

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

const CountriesWrapper = styled.div`
	width: auto;
	margin: 20px;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 20px;

	@media (min-width: 576px) {
		width: 540px;
		margin: 20px auto;
		justify-content: space-between;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 20px;
		grid-row-gap: 20px;
	}
	@media (min-width: 768px) {
		width: 720px;
		grid-template-columns: repeat(3, 1fr);
		grid-column-gap: 30px;
		grid-row-gap: 30px;
	}
	@media (min-width: 1024px) {
		width: 960px;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 40px;
		grid-row-gap: 40px;
	}
	@media (min-width: 1280px) {
		width: 1140px;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 40px;
		grid-row-gap: 40px;
	}
	@media (min-width: 1366px) {
		width: 1280px;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 80px;
		grid-row-gap: 80px;
	}
`;

const InputWrapper = styled.div`
	width: 100%;
	height: 50px;
	position: relative;

	&:first-child {
		margin-bottom: 10px;
	}

	@media (min-width: 576px) {
		width: auto;

		&:first-child {
			margin-bottom: 0;
		}
	}
`;

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

const CountriesList = () => {
	const [countryData, setCountryData] = useState([]);
	const [query, setQuery] = useState('');
	const [region, setRegion] = useState('');

	const handleCountrySearchChange = evt => {
		setQuery(evt.target.value.toLowerCase());
	};

	const handleRegionChange = evt => {
		setRegion(evt.target.value);
	};

	useEffect(() => {
		fetchCountries().then(json => {
			setCountryData(json);
		});
	}, []);

	useEffect(() => {
		fetchCountries().then(json => {
			setCountryData(
				json.filter(country => country.name.toLowerCase().includes(query))
			);
		});
	}, [query]);

	useEffect(() => {
		fetchCountries().then(json => {
			setCountryData(json.filter(country => country.region.includes(region)));
		});
	}, [region]);

	return (
		<>
			<ContainerRow>
				<InputWrapper>
					<SearchInput
						value={query}
						onChange={handleCountrySearchChange}
						name='search'
						type='search'
						placeholder='Search for a country...'
					/>
					<FontAwesomeIcon
						style={{ position: 'absolute', top: 16, left: 20, opacity: 0.5 }}
						icon={faSearch}
					/>
				</InputWrapper>
				<InputWrapper>
					<Select value={region} onChange={handleRegionChange} name='region'>
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
				</InputWrapper>
			</ContainerRow>
			<CountriesWrapper>
				{countryData.map(country => (
					<Link
						to={`/${createSlug(country.name)}`}
						key={country.name}
						title={country.name}>
						<CountryCard
							flag={country.flag}
							name={country.name}
							population={country.population}
							region={country.region}
							capital={country.capital}
						/>
					</Link>
				))}
			</CountriesWrapper>
		</>
	);
};

export default CountriesList;
