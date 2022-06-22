
import { FaTemperatureHigh, FaTemperatureLow } from 'react-icons/fa';


const DisplayWeatherResults = (props) => {

  const { allWeatherResults } = props;
    
  return (
    <>
      <>
        {allWeatherResults !== null ? (
          <main className="weatherResultsContainer">
            <h2>Forecast</h2>
            <h3 className="weatherDescription">{allWeatherResults.weather[0].description}</h3>
            <div className="iconImage">
              <img src={`https://openweathermap.org/img/w/${allWeatherResults.weather[0].icon}.png`} alt={allWeatherResults.weather[0].main}/>
            </div>
            <div className="temperature">
              <p>Temp: {parseFloat(allWeatherResults.main.temp).toFixed(1)} &deg;C</p>
              <p>Feels like: {parseFloat(allWeatherResults.main.feels_like).toFixed(1)} &deg;C</p>
            </div>
            <div className="temperatureRange">
              <p><FaTemperatureHigh /> {parseFloat(allWeatherResults.main.temp_max).toFixed(1)} &deg;C  ||  <FaTemperatureLow /> {parseFloat(allWeatherResults.main.temp_min).toFixed(1)} &deg;C</p>
              <p>Humidity: {allWeatherResults.main.humidity} %</p>
              <p>Wind speed: {allWeatherResults.wind.speed} meters/sec</p>
            </div>
            <div>
              <h3>{allWeatherResults.name} | {allWeatherResults.sys.country}</h3>
            </div>
          </main>
        ) : null}
      </>
    </>
  )
}

export default DisplayWeatherResults;