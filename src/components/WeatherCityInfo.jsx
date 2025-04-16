import React, { useState } from 'react'
import { useSelector } from 'react-redux'


export default function WeatherCityInfo ({ loading, error }) {
    const weather = useSelector(store => store.weather.data)
    console.log(weather);


    // Gestion des cas où les données ne sont pas encore prêtes
  if (loading) {
    return <p>Chargement...</p>
  }

  if (error) {
    return <p className="error">{error}</p>
  }

  if (!weather || !weather.sys || !weather.main || !weather.weather) {
    return <p>Pas encore de données météo à afficher.</p>
  }
    
    return (
        <>
        <div className='city_info'>
          <h1 className='city_info_items'>
            🌤️Info sur la ville
          </h1>
            {loading && <p>Chargement...</p>}
      {error && <p className="">{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p> Country :{weather.sys.country}</p>
          <p>Température : {weather.main.temp} °C</p>
          <p>Météo : {weather.weather[0].description}</p>
        </div>
      )}
          
        </div>
        </>
    )
}