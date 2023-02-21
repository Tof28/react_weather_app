import axios from "axios";

export async function fetchWeather(city, setError) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_APP_API_KEY}`.charAt

    try {
        const response = await axios.get(url);
        setError("");
        return response.data;        
    } catch (error) {
        setError('city not found');
        return error;
    }
}