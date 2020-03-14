const fetchCountries = () => {
	return fetch(`https://restcountries.eu/rest/v2/all`)
		.then(response => response.json())
		.catch(error => {
			throw new Error(`fetchCountries failed: ${error.message}`);
		});
};

export { fetchCountries };
