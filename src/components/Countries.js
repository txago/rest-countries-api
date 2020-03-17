import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CountryCard from './CountryCard';
import SearchFilter from './SearchFilter';
import SelectFilter from './SelectFilter';
import { fetchCountries } from '../services/api';

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

const Countries = () => {
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
					<SearchFilter
						value={query}
						onChange={handleCountrySearchChange}
						name='search'
						type='search'
					/>
				</InputWrapper>
				<InputWrapper>
					<SelectFilter
						value={region}
						onChange={handleRegionChange}
						name='region'
					/>
				</InputWrapper>
			</ContainerRow>
			<CountriesWrapper>
				{countryData.map(country => (
					<CountryCard {...country} key={country.name} />
				))}
			</CountriesWrapper>
		</>
	);
};

export default Countries;
