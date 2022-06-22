function Weather(props) {
    return (
        <div className='weatherContainer'>
            <div className="forecastInfo">
                <p className="cityName">{props.city + ','}</p>
                <p className="countryName">
                    {props.country}
                </p>
            </div>
            <p className="localTime">Local Time: {props.time}</p>
            <p className="forecastDescription">{props.weather ? props.weather.weather[0].description : null}</p>
            <div className="weatherResults">
                <p className="forecastDisplay">{Number(props.weather.main.temp)}</p>
            </div>
        </div>
    )
}

export default Weather 
