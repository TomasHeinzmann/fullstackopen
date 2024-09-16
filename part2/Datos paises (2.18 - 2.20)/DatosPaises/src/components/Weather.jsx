const Weather = ({weather}) => {
    const code = weather.weather_code
    const temperature = weather.current.temperature_2m
    const windSpeed = weather.current.wind_speed_10m
    if (code === 0) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Clear sky</p>
            </div>
        )
    } else if (1 >= code <= 3) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Mainly clear, partly cloudy, and overcast</p>
            </div>
        )
    } else if (code === 45 || code === 48) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>	Fog and depositing rime fog</p>
            </div>
        )
    } else if (code === 51 || code === 53 || code === 55 ) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Drizzle: Light, moderate, and dense intensity</p>
            </div>
        )
    } else if (code === 56 || code === 57) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Freezing Drizzle: Light and dense intensity</p>
            </div>
        )
    } else if (code === 61 || code === 63 || code === 65 ) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Rain: Slight, moderate and heavy intensity</p>
            </div>
        )
    } else if (code === 66 || code === 67) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Freezing Rain: Light and heavy intensity</p>
            </div>
        )
    } else if (code === 71 || code === 73 || code === 75 ) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Snow fall: Slight, moderate, and heavy intensity</p>
            </div>
        )
    } else if (code === 77) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Snow grains</p>
            </div>
        )
    } else if (code === 80 || code === 81 || code === 82 ) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Rain showers: Slight, moderate, and violent</p>
            </div>
        )
    } else if (code === 85 || code === 86) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Snow showers slight and heavy</p>
            </div>
        )
    } else if (code === 95) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Thunderstorm: Slight or moderate</p>
            </div>
        )
    } else if (code === 96 || code === 99) {
        return(
            <div>
                <p>Temperture: {temperature}</p>
                <p>Wind: {windSpeed} m/s</p>
                <p>Thunderstorm with slight and heavy hail</p>
            </div>
        )
    }
}

export default Weather