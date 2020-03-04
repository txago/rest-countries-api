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
	const [theme, toggleTheme, componentMounted] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	const handleChange = e => {
		setQuery(e.target.value);
	};

	useEffect(() => {
		fetch('https://restcountries.eu/rest/v2/all')
			.then(response => response.json())
			.then(data => {
				const results = data.filter(country =>
					country.name.toLowerCase().includes(query)
				);
				setData(results);
			});
	}, [query]);

	if (!componentMounted) {
		return <div />;
	}

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
