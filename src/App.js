import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import UserSelectCity from './UserSelectCity.js';
import DisplayWeatherResults from './DisplayWeatherResults.js';


function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [citySearch, setcitySearch] = useState('Toronto');


  useEffect( () => {
    const apiKey = 'f7f786cb25e9169c017129f8c5051057';

    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather/`,
      dataResponse: "json",
      params: {
        appid: apiKey,
        lang: "en",
        units: "metric",
        q: citySearch,
      }

      
    }).then( (response) => {
      setWeatherData(response.data);
    }).catch(error => {
      // return error found this on stack overflow 
      return Swal.fire ({
        title: "error",
        text: 'Sorry! Unable to find your city!',
        icon: 'error',
        // removes error message within a certain time frame
        timer: 2500
      })
    })
  }, [citySearch]);


  const cityResults = (userCity) => {
    setcitySearch(userCity);
  }


  return (
    <>
      <div className="wrapper">
        <header>
          <h1 className="title">Today's Weather</h1>
        </header>
      
        <UserSelectCity cityResults={cityResults} />
        <DisplayWeatherResults allWeatherResults={weatherData}/>
       
      </div>
      <>
        <footer className="footer">
  
        </footer>
      </>
    </>
  );
}

export default App;