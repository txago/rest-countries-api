import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes/themes';
import GlobalStyles from '../themes/global';
import useDarkMode from '../themes/useDarkMode';
import Card from '../components/Card';
import CountriesList from '../components/CountriesList';
import Header from '../components/Header';
import Toggle from '../components/Toggle';
import { fetchCountries } from '../api';

const App = () => {
	const [countryData, setCountryData] = useState([]);
	const [data, setData] = useState([]);
	const [query, setQuery] = useState('');
	const [region, setRegion] = useState('');
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	const handleCountrySearchChange = evt => {
		setQuery(evt.target.value);
	};

	const handleRegionChange = evt => {
		setRegion(evt.target.value);
	};

	useEffect(() => {
	  fetchCountries()
		  .then((json) => {
		  	setCountryData(json);
		  	setData(json);
		  	// TODO: Talvez deveria resetar o region e query, nao tenho certeza
		  })
		  .catch((err) => {
		    // TODO: Implementar manipulaçao de erro
		  })
	}, []); // <- Faz só um fetch no didMount e separa dados sem filtro de dados filtrados localmente

	useEffect(() => {
		let filteredData = countryData;

		if (region) {
			filteredData = filteredData
				.filter(country => country.region.toLowerCase().includes(region))
		}

		if (query) {
			filteredData = filteredData
				.filter(country => country.name.toLowerCase().includes(query))
		}

		setData(filteredData);
	}, [region, query]); // <- Os dois filtros devem funcionar juntos agora

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Header>
				<Toggle theme={theme} toggleTheme={toggleTheme} />
			</Header>
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
			<CountriesList>
				{data.map((country, index) => (
					<Card
						key={index}
						flag={country.flag}
						name={country.name}
						population={country.population}
						region={country.region}
						capital={country.capital}
					/>
				))}
			</CountriesList>
			<footer>
				<p>This is footer</p>
			</footer>
		</ThemeProvider>
	);
};

export default App;
