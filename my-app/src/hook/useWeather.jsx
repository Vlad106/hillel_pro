import { useState } from "react";

export function useWeather() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchWeather = async (cityName) => {
        setError("");
        setWeatherData(null);
        setLoading(true);

        try {
            const geoRes = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=uk`
            );
            const geoData = await geoRes.json();

            if (!geoData.results || geoData.results.length === 0) {
                setError("Місто не знайдено");
                setLoading(false);
                return;
            }

            const city = geoData.results[0];

            const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
            );
            const weatherJson = await weatherRes.json();

            setWeatherData({
                name: city.name,
                country: city.country,
                current: weatherJson.current_weather,
                daily: weatherJson.daily,
            });
        } catch (e) {
            setError("Помилка запиту");
        } finally {
            setLoading(false);
        }
    };

    return { weatherData, error, loading, fetchWeather };
}
