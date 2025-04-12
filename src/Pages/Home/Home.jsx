import React from 'react'
import Bouton from '../../components/Button/Button'
import './Home.css'
import useWeather from '../../hooks/useWeather'
import { useState, useEffect } from 'react'

const Home = (props) =>{

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedCity(city.trim())
  }

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
      <div className={getWeatherClass(weatherData)}>
      <div className='city_container '>
        <div className='city_search'>
        <form className='input' onSubmit={handleSubmit}>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
          placeholder="Entrez une ville" /> <br />
          <Bouton type='submit' props={{name:'Recherche'}}/>
        </form>
        </div>
        <div className='city_info'>
          <h1 className='city_info_items'>
            🌤️Info sur la ville
          </h1>
            {loading && <p>Chargement...</p>}
      {error && <p className="">{error}</p>}

      {weatherData && (
        <div className="">
          <h2 className="">{weatherData.name}</h2>
          <p className=""> Country :{weatherData.sys.country}</p>
          <p>Température : {weatherData.main.temp} °C</p>
          <p>Météo : {weatherData.weather[0].description}</p>
        </div>
      )}
          
        </div>
      </div>
      </div>

    </>
  )
}

export default Home