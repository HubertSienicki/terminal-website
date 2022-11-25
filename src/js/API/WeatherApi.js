export class WeatherApi {
	constructor() {
		this.weatherOptions = {
			method: "GET",
			url: "http://api.openweathermap.org/data/2.5/forecast?",
			lat: "lat=",
			lon: "&lon=",
			apiKey: "&appid=732c23c7913854427816b18a0f459051",
		};
		this.apiData = "";
		this.xhr = new XMLHttpRequest();
		this.xhr.withCredentials = false;
		this.data = "";
	}

	call(lat, lon) {
		const callUrl =
			this.weatherOptions.url +
			this.weatherOptions.lat +
			lat +
			this.weatherOptions.lon +
			lon +
			this.weatherOptions.apiKey;
		console.log(callUrl);

		this.xhr.open(
			//opens an api call
			this.weatherOptions.method,
			callUrl
		);

		this.xhr.send();

		var promise = new Promise((resolve) => {
			this.xhr.addEventListener("readystatechange", function getApiData() {
				if (this.readyState === this.DONE) {
					resolve(JSON.parse(this.responseText));
				}
			});
		});

		/**
		 * for some reason it does not let me return apiData and i got to push it to another array...
		 */
		promise.then((resolve) => {
			console.log(resolve); //api response
		});
	}
}
