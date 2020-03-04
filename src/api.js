const fetchCountries = () => {
	return fetch(`https://restcountries.eu/rest/v2/all`)
		.then(response => response.json())
		.then(data => data)
		.catch(error => this.setState({ error, isLoading: false }));
};

export default fetchCountries;
