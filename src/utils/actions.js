import { SET_WEATHER } from "./Action_type"

const API_KEY="dcb94e9ffbbc48306e7d1d3ae1a5b791"
const API_WEATHER_URL=(city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=fr`
const setWeather =(data) => ({
    type: SET_WEATHER,
    payload: data
})

  const fetchWeather = (city) => async (dispatch) => {
    try {
        const res = await fetch(API_WEATHER_URL(city))
        const data = await res.json()
        dispatch(setWeather(data))
    } catch (error) {
        console.error()
    }
  }

  export default fetchWeather