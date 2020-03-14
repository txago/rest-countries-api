import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCodes } from '../services/codes';
import { createSlug } from '../utils/slug';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CountryRelated = styled.div`
	width: 100%;
	margin: 30px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;

	> div {
		margin-left: 20px;
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

const CountryBorders = ({ borderName }) => {
	const [borderCountries, setBorderCountries] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchCodes(borderName).then(json => {
			setBorderCountries(json);
			if (json.status !== 400) {
				setLoading(true);
			}
		});
	}, [borderName]);

	return loading ? (
		<CountryRelated>
			<span style={{ fontWeight: 800 }}>Border Countries:</span>
			{borderCountries.map(country => {
				return (
					<ButtonWrapper
						key={country.name}
						title={country.name}
						style={{ marginLeft: '10px' }}>
						<Link to={`/${createSlug(country.name).toLowerCase()}`}>
							{country.name}
						</Link>
					</ButtonWrapper>
				);
			})}
		</CountryRelated>
	) : (
		<span style={{ fontWeight: 800 }}>This country has no borders.</span>
	);
};

CountryBorders.propTypes = {
	borderName: PropTypes.node.isRequired
};

export default CountryBorders;
