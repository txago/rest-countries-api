import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { lightTheme, darkTheme } from './themes/themes';
import GlobalStyles from './themes/global';
import useDarkMode from './themes/useDarkMode';
import Header from './components/Header';
import Toggle from './components/Toggle';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

const App = () => {
	const [theme, toggleTheme] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<BrowserRouter>
				<Header>
					<Toggle theme={theme} toggleTheme={toggleTheme} />
				</Header>
				<Switch>
					<Route exact path='/' component={CountriesList} />
					<Route path='/:name' component={CountryDetails} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
