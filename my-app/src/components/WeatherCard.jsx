import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function WeatherCard({ weatherData, loading, error }) {
    if (loading) return <p>Загрузка...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!weatherData) return null;

    const weatherCode = weatherData.current.weathercode;
    let bgClass = "bg-light";
    if (weatherCode === 0) bgClass = "bg-warning";
    else if (weatherCode >= 1 && weatherCode <= 3) bgClass = "bg-info";
    else if (weatherCode >= 61 && weatherCode <= 67) bgClass = "bg-primary";
    else if (weatherCode >= 71 && weatherCode <= 77) bgClass = "bg-white";

    return (
        <Card className={`mb-3 ${bgClass}`} style={{ color: "black" }}>
            <Card.Body>
                <Card.Title>
                    {weatherData.name}, {weatherData.country}
                </Card.Title>
                <Card.Text>
                    Температура: {weatherData.current.temperature}°C <br />
                    Ветер: {weatherData.current.windspeed} м/с <br />
                    Погода: {weatherCode}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">Прогноз:</Card.Subtitle>
                <ListGroup variant="flush">
                    {weatherData.daily.temperature_2m_max.map((t, idx) => (
                        <ListGroup.Item key={idx}>
                            День {idx + 1}: min {weatherData.daily.temperature_2m_min[idx]}°C, max {t}°C
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default WeatherCard;
