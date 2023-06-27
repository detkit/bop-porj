const apiKey = '78ad60854f62aeb422c858f627b2e440';
const apiURL =
	'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBar = document.querySelector('.search-bar input');
const searchBtn = document.querySelector('.search-bar button');
const weatherItem = document.querySelector('.weather-item');

async function checkWeather(city) {
	const response = await fetch(apiURL + city + `&appid=${apiKey}`);

	if (response.status === 404) {
		document.querySelector('.error').style.display = 'block';
		document.querySelector('.weather').style.display = 'none';
	} else {
		var data = await response.json();

		document.querySelector('.city').innerHTML = data.name;
		document.querySelector('.temp').innerHTML =
			Math.round(data.main.temp) + '°c';
		document.querySelector('.humidity').innerHTML =
			data.main.humidity + '%';
		document.querySelector('.wind ').innerHTML = data.wind.speed + 'km/h';

		if (data.weather[0].main === 'Clouds') {
			weatherItem.src = 'images/clouds.png';
		} else if (data.weather[0].main === 'Rain') {
			weatherItem.src = 'images/rain.png';
		} else if (data.weather[0].main === 'Clear') {
			weatherItem.src = 'images/clear.png';
		} else if (data.weather[0].main === 'Drizzle') {
			weatherItem.src = 'images/drizzle.png';
		} else if (data.weather[0].main === 'Mist') {
			weatherItem.src = 'images/mist.png';
		} else weatherItem.src = 'images/snow.png';

		document.querySelector('.weather').style.display = 'block';
		document.querySelector('.error').style.display = 'none';
	}
}

searchBtn.addEventListener('click', function () {
	checkWeather(searchBar.value);
});
