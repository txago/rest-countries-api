const fetchCodes = borderName => {
	return fetch(
		`https://restcountries.eu/rest/v2/alpha?codes=${borderName
			.join(';')
			.toLowerCase()}`
	)
		.then(response => response.json())
		.catch(error => {
			throw new Error(`fetchCountries failed: ${error.message}`);
		});
};

export { fetchCodes };
