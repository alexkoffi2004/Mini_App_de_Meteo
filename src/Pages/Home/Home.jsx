import React from 'react'
import SearchWeatherCity from '../../components/SearchWeatherCity'
import WeatherCityInfo from '../../components/WeatherCityInfo'
import WeatherApp from '../../components/WeatherApp'
import './Home.css'
import useWeather from '../../hooks/useWeather'
import { useState, useEffect } from 'react'

const Home = (props) =>{
  // Historique en localStorage
  const [city, setCity] = useState('')
  const [submittedCity, setSubmittedCity] = useState('')
  const { weatherData, loading, error, fetchWeather } = useWeather()

  useEffect(() => {
    if (submittedCity) {
      fetchWeather(submittedCity)
      // Historique en localStorage
      const history = JSON.parse(localStorage.getItem('history')) || []
      if (!history.includes(submittedCity)) {
        localStorage.setItem('history', JSON.stringify([...history, submittedCity]))
      }
    }
  }, [submittedCity])


  const getWeatherClass = (weather) => {
    if (!weather) return "weather-default"
    const main = weather.weather[0].main.toLowerCase()
  
    if (main.includes("cloud")) return "weather-clouds"
    if (main.includes("rain")) return "weather-rain"
    if (main.includes("thunderstorm")) return "weather-thunderstorm"
    if (main.includes("snow")) return "weather-snow"
    if (main.includes("clear")) return "weather-clear"
  
    return "weather-default"
  }
  

  return(
    <>
      <WeatherApp className='weather'/>
      <div className={getWeatherClass(weatherData)}>
        <div className='city_container '>
          <SearchWeatherCity city={city} setCity={setCity} setSubmittedCity={setSubmittedCity}/>
          <WeatherCityInfo weatherData={weatherData} loading={loading} error={error}/>
        </div>
      </div>

    </>
  )
}

export default Home