import React from 'react'
import useWeather from '../hooks/useWeather'


export default function WeatherCityInfo ({ weatherData, loading, error }) {
    // const { weatherData, loading, error } = useWeather()
    return (
        <>
        <div className='city_info'>
          <h1 className='city_info_items'>
            🌤️Info sur la ville
          </h1>
            {loading && <p>Chargement...</p>}
      {error && <p className="">{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p> Country :{weatherData.sys.country}</p>
          <p>Température : {weatherData.main.temp} °C</p>
          <p>Météo : {weatherData.weather[0].description}</p>
        </div>
      )}
          
        </div>
        </>
    )
}