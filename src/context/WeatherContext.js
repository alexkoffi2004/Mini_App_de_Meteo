import { createContext } from "react";
import { useContext } from "react";


const WeatherContext = createContext(null)

const useWeatherContext = () =>{
    const context = useContext(WeatherContext)
    return(
        <></>
    )
}

export default useWeatherContext