import './App.css';
import { useState } from 'react';
import { fetchWeather} from './api';
import { weatherCard } from './components/WeatherCard';

function App () {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState('');
    const [error, setError] = useState('');
  

    const handleChange = (event) => {
        setCity(event.value.target);
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            const weather = await fetchWeather(city, setError);
            setWeather(weather);
        } catch (error) {
            setError(" City not found");
        }
    };

    return (
        <div className = "App">
        <h1 className= "app_heading">Weather App</h1>
        <form onSubmit = {handleSubmit}>
            <input type="text" placeholder = "Enter city" value = {city} onchange = {handleChange}></input>    
            <button type="submit">Search</button>
        </form> 


        { error ? (
            <p className = "error">{error}</p>
            ) : (
                <weatherCard weather = {weather}></weatherCard>
            )}
        </div>
        );
    }

export default App;
