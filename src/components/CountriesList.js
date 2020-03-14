import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../services/api';
import { createSlug } from '../utils/slug';
import styled from 'styled-components';
import Card from './Card';

const CountriesWrapper = styled.div`
	width: auto;
	margin: 0 20px;
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-column-gap: 20px;
	grid-row-gap: 20px;
	@media (min-width: 576px) {
		width: 540px;
		margin: 0 auto;
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

const CountriesList = () => {
	const [countryData, setCountryData] = useState([]);
	const [query, setQuery] = useState('');
	const [region, setRegion] = useState('');

	const handleCountrySearchChange = evt => {
		setQuery(evt.target.value);
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
			setCountryData(
				json.filter(country => country.region.toLowerCase().includes(region))
			);
		});
	}, [region]);

	return (
		<>
			<input
				value={query}
				onChange={handleCountrySearchChange}
				name='search'
				type='search'
				placeholder='Search for a country...'
			/>
			<select value={region} onChange={handleRegionChange} name='region'>
				<option value='' defaultValue>
					Filter by Region
				</option>
				<option value='africa'>Africa</option>
				<option value='america'>America</option>
				<option value='asia'>Asia</option>
				<option value='europe'>Europe</option>
				<option value='oceania'>Oceania</option>
			</select>
			<CountriesWrapper>
				{countryData.map(country => (
					<Link
						to={`/${createSlug(country.name)}`}
						key={country.name}
						title={country.name}>
						<Card
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
