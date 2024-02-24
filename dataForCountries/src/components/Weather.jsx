import { useState, useEffect } from "react"
import weatherService from '../services/weatherService'
import './weather.css'

const Weather = ({city}) => {
    const [weatherInfo, setWeatherInfo] = useState({})
    useEffect( () => {
        weatherService.getAll(city)
        .then( (weatherData) => {
            setWeatherInfo (weatherData)
        })
        .catch ( () => {
            console.log('city not found')
        })
      },[city])

    if (!weatherInfo) {
        return (
            <p>Could not find the weather forecast for this capital</p>
        )
    }

    if (weatherInfo.main && weatherInfo.main.temp) {
        const url = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`
        return (
            <div>
                <h2>Weather in {city}</h2>
                <p>Temperature {weatherInfo.main.temp} celsius</p>
                <img src={url} alt="icon of the weather" className="weatherIcon"></img>
                <p>Wind speed {weatherInfo.wind.speed} m/s</p>

            </div>
        )
    }


    

}

export default Weather