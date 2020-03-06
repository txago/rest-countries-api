import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes/themes';
import GlobalStyles from '../themes/global';
import useDarkMode from '../themes/useDarkMode';
import Card from '../components/Card';
import CountriesList from '../components/CountriesList';
import Header from '../components/Header';
import Toggle from '../components/Toggle';

const App = () => {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState('');
	const [region, setRegion] = useState('');
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	const handleChange = e => {
		setQuery(e.target.value);
	};

	const regionFilter = e => {
		setRegion(e.target.value);
	};

	useEffect(() => {
		const request = async () => {
			const response = await fetch('https://restcountries.eu/rest/v2/all');
			const json = await response.json();
			setData(
				json.filter(country => country.name.toLowerCase().includes(query))
			);
		};
		request();
	}, [query]);

	useEffect(() => {
		const request = async () => {
			const response = await fetch('https://restcountries.eu/rest/v2/all');
			const json = await response.json();
			setData(
				json.filter(country => country.region.toLowerCase().includes(region))
			);
		};
		request();
	}, [region]);

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Header>
				<Toggle theme={theme} toggleTheme={toggleTheme} />
			</Header>
			<input
				value={query}
				onChange={handleChange}
				name='search'
				type='search'
				placeholder='Search for a country...'
			/>
			<select value={region} onChange={regionFilter} name='region'>
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
