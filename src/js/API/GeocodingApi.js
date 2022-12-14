export class GeocodingApi {
	/**
	 * Constructor for api call
	 */
	constructor() {
		this.geocodingOptions = {
			method: "GET",
			url: "http://api.openweathermap.org/geo/1.0/direct?q=",
			limit: "&limit=1",
			apiKey: "&appid=732c23c7913854427816b18a0f459051",
		};
		this.apiData = null;
		this.apiData = null;
		this.xhr = new XMLHttpRequest();
		this.xhr.withCredentials = false;
		this.data = [];
	}

	/**
	 * Calls geocoding api to return geolocation for a desired city
	 * @param city - city name
	 * @returns table of latitute and logitude
	 */
	call(city) {
		this.xhr.open(
			this.geocodingOptions.method,
			this.geocodingOptions.url +
				city +
				this.geocodingOptions.limit +
				this.geocodingOptions.apiKey
		);

		this.xhr.send();

		var promise = new Promise((resolve) => {
			this.xhr.addEventListener("readystatechange", function getApiData() {
				if (this.readyState === this.DONE) {
					resolve(JSON.parse(this.responseText));
				}
			});
		});

		promise.then((resolve) => {
			this.apiData = resolve;
			this.data.push(this.apiData[0]["lat"]);
			this.data.push(this.apiData[0]["lon"]);
		});

		return this.data;
	}
}
