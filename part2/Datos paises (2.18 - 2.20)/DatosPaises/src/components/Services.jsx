import axios from "axios"
const baseUlr = "https://studies.cs.helsinki.fi/restcountries/api/all"
const baseWeatherUrl = "https://api.open-meteo.com/v1/forecast?"

const getAll = () => {
    const request = axios.get(baseUlr)
    return request.then(response => response.data)
}

const getCountry = (name) => {
    const request = axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`)
    return request.then(response => response.data)
}

const getWeather = (lat, lon) => {
    const request = axios.get(`${baseWeatherUrl}latitude=${lat}&longitude=${lon}&weather_code&current=temperature_2m,wind_speed_10m`)
    return request.then(response => response.data)
}

export default {getAll, getCountry, getWeather}