import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CountriesList from '../components/CountriesList';
import CountryDetails from '../components/CountryDetails';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={CountriesList} />
			<Route path='/:name' component={CountryDetails} />
		</Switch>
	);
};

export default Main;
