import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Toggle from './components/Toggle';
import Countries from './components/Countries';
import Country from './components/Country';

import { lightTheme, darkTheme } from './themes/themes';
import GlobalStyles from './themes/global';
import useDarkMode from './themes/useDarkMode';

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
					<Route exact path='/' component={Countries} />
					<Route path='/:name' component={Country} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
