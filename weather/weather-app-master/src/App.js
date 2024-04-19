import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/current-weather';
import ForecastWeather from './components/forecast-weather/forecast-weather'
import { WEATHER_API_KEY, WEATHER_API_URL } from './Api';
import './App.css';
import { useState } from 'react';

function App() {
  const [ currentWeather, setCurrentWeather ] = useState(null);
  const [ forecast, setForecast ] = useState(null);


  const handleSearchChange = (searchData) => {
    const [ lat, lon ] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse});
        setForecast({ city: searchData.label, ...forecastResponse});
      })
      .catch((err) => console.error(err));
  }
  // console.log(currentWeather);
  // console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange = {handleSearchChange}/>
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {forecast && <ForecastWeather data={forecast}/>}
    </div>
  );
}

export default App;
