import React from 'react'
import Bouton from '../components/Button/Button'

import { useDispatch } from 'react-redux'
import fetchWeather from '../utils/actions'
import useWeather from '../hooks/useWeather'


export default function SearchWeatherCity (/*{ city, setCity, setSubmittedCity }*/) {
  const {city, setCity} = useWeather("")
  const dispatch = useDispatch()
    const handelFetchWeather = () => {
      dispatch(fetchWeather(city))
    }

    return(
        <div className='city_search'>
                <form className='input' /*onSubmit={handleSubmit}*/>
                  <input 
                    type="text" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Entrez une ville" 
                  /> 
                  <br />
                  <Bouton handelClick= {() => handelFetchWeather()} type='submit' props={{name:'Recherche'}}/>
                </form>
        </div>
    )
}