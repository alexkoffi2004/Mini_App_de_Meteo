import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import fetchWeather from '../utils/actions'


export default function SearchWeatherCity (/*{ city, setCity, setSubmittedCity }*/) {
  const [city, setCity] = useState("")
  const dispatch = useDispatch()
    const handelFetchWeather = () => {
      dispatch(fetchWeather(city))
    }

    return(
        <div className='city_search'>
                <div className='input'>
                  <input 
                    type="text"
                    id="city"
                    name="city" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Entrez une ville" 
                  /> 
                  <br />
                  {/* <Bouton handelClick= {() => handelFetchWeather()} type='submit' props={{name:'Recherche'}}/> */}
                  <button onClick={() => handelFetchWeather()}>Recherche</button>
                </div>
        </div>
    )
}