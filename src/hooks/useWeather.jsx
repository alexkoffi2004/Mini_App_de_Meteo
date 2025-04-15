import { useState } from 'react'

const API_KEY = "dcb94e9ffbbc48306e7d1d3ae1a5b791" // Remplace par ta clé

export default function useWeather() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchWeather = async (city) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=fr`
      )
      if (!res.ok) throw new Error("Ville non trouvée")
      const data = await res.json()
      setWeatherData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { weatherData, loading, error, fetchWeather }
}
