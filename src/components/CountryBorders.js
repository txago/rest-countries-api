import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { node } from 'prop-types';
import { fetchCodes } from '../services/countryCodes';
import { createSlug } from '../utils/slug';
import styled from 'styled-components';
import Button from './Button';

const CountryRelated = styled.div`
	width: auto;
	margin: 30px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	flex-wrap: wrap;

	> a > div {
		margin: 5px 10px 5px 0;
	}
`;

const CountryBorders = ({ borderName }) => {
	const [borderCountries, setBorderCountries] = useState([]);

	useEffect(() => {
		fetchCodes(borderName).then(json => {
			setBorderCountries(json);
		});
	}, [borderName]);

	return (
		<CountryRelated>
			<span style={{ fontWeight: 800, marginRight: '10px' }}>
				Border Countries:
			</span>
			{borderCountries.map(country => {
				return (
					<Link
						to={`/${createSlug(country.name)}`}
						title={country.name}
						key={country.name}>
						<Button>{country.name}</Button>
					</Link>
				);
			})}
		</CountryRelated>
	);
};

CountryBorders.propTypes = {
	borderName: node.isRequired
};

export default CountryBorders;
