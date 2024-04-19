import "./current-weather.css"

const CurrentWeather = ({data}) => {
	// console.log("data",data);
	const temp_c=(data.main.temp-273).toPrecision(3);
	const feels_like_c=(data.main.feels_like-273).toPrecision(3);
	return (
    <div className="weather">
			<div className="top">
				<div>
					<p className="city">{data.city}</p>
					<p className="weather-description">{data.weather[0].description}</p>
				</div>
				<img alt="weather" className="weather-icon" src={`./icons/${data.weather[0].icon}.png`}/>
			</div>
			<div className="bottom">
				<p className="temperature">{`${temp_c}°C`}</p>
				<div className="details">
					<div className="parameter-row">
						<span className="parameter-label">Details</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Feels like</span>
						<span className="parameter-label">{`${feels_like_c}°C`}</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Wind</span>
						<span className="parameter-label">{`${data.wind.speed}m/s`}</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Humidity</span>
						<span className="parameter-label">{`${data.main.humidity}%`}</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Pressure</span>
						<span className="parameter-label">{`${data.main.pressure}hPa`}</span>
					</div>
				</div>
			</div>
		</div>  
  );
}

export default CurrentWeather;