import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../themes/useDarkMode';
import { lightTheme, darkTheme } from '../themes/themes';
import { GlobalStyles } from '../themes/global';
import Header from '../components/Header';
import Toggle from '../components/Toggle';

const App = () => {
	const [theme, toggleTheme, componentMounted] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!componentMounted) {
		return <div />;
	}

	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<Header>
				<Toggle theme={theme} toggleTheme={toggleTheme} />
			</Header>
			<main>
				<p>This is main container</p>
			</main>
			<footer>
				<p>This is footer</p>
			</footer>
		</ThemeProvider>
	);
};

export default App;
