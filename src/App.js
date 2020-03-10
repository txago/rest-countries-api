import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes/themes';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './themes/global';
import useDarkMode from './themes/useDarkMode';
import Header from './components/Header';
import Toggle from './components/Toggle';
import Main from './containers/main';

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
				<Main />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
