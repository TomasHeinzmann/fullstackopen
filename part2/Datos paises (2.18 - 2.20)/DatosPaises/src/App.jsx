import { useState, useEffect } from 'react';
import './App.css';
import Countryservices from './components/Services';
import Showinfo from './components/Info';
import Weather from './components/Weather';

function App() {
  const [countries, setCountries] = useState([]);
  const [message, setMessage] = useState("");
  const [lookingCountry, setLookingCountry] = useState("");
  const [info, setInfo] = useState(null);
  const [weather, setWeather] = useState("")

  useEffect(() => {
    Countryservices.getAll().then(response => setCountries(response));
  }, []);

  useEffect(() => {
    if (info) {
      Countryservices.getWeather(info.capitalInfo.latlng[0], info.capitalInfo.latlng[1])
        .then(response => setWeather(response));
        console.log(weather)
    }
  }, [info]);

  const handleCountry = (event) => {
    const target = event.target.value;
    setLookingCountry(target);

    if (countries) {
      const result = countries.filter(country => country.name.common.includes(target));
      if (result.length > 10) {
        setMessage("Too many matches, specify another filter");
        console.log(result.length)
        setInfo("")
        setWeather("")
      } else if (result.length > 1) {
        setMessage(result.map((country, index) => 
        <div key={country.name.official}>
          <li key={country.name.official}>{country.name.common}</li>
          <button onClick={() => {
            Countryservices.getCountry(result[0].name.common).then(response => setInfo(response))
          }}>Show</button>
        </div>));
        console.log(message)
        setInfo("")
        setWeather("")
      } else if (result.length === 1) {
        Countryservices.getCountry(result[0].name.common).then(response => setInfo(response));
        setMessage("")
      } else {
        setMessage("No matches found");
        setInfo("");
        setWeather("");
      }
    }
  };

  return (
    <>
      <p>Find countries</p>
      <input type="text" onChange={handleCountry} />
      <ul>{message}</ul>
      {info && (
        <div>
          <Showinfo info={info}/>
          {weather && (
            <div>
              <h1>Weather in {info.capital}</h1>
              <Weather weather={weather}/>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
