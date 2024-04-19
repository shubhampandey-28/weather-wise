import React from 'react'
import { Accordion, AccordionItemPanel, AccordionItem, AccordionItemHeading, AccordionItemButton } from 'react-accessible-accordion';
import './forecast-weather.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ForecastWeather = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  console.log(data);

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img alt="icon" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                  <label className='day'>{forecastDays[idx]}</label>
                  <label className='description'>{item.weather[0].description}</label>
                  <label className='min-max'>{(item.main.temp_min-273).toPrecision(3)}°C / {(item.main.temp_max-273).toPrecision(3)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like</label>
                  <label>{(item.main.feels_like-273).toPrecision(3)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default ForecastWeather