import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CountriesList from '../components/CountriesList';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={CountriesList} />
			{/* <Route path='/:name' component={CountryDetails} /> */}
		</Switch>
	);
};

export default Main;
