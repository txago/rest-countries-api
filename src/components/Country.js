import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import Button from './Button';
import CountryData from './CountryData';
import { fetchCountries } from '../services/api';
import { createSlug } from '../utils/slug';

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

const Country = urlParam => {
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
					<CountryData {...country} />
				</CountryWrapper>
			))}
		</ContainerRow>
	);
};

export default Country;
