import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries } from '../services/api';
import { createSlug } from '../utils/slug';
import styled from 'styled-components';
import Card from './Card';

const CountriesWrapper = styled.div`
	width: 1280px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-column-gap: 80px;
	grid-row-gap: 80px;
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
					<Link to={`/${createSlug(country.name)}`} key={country.name}>
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
