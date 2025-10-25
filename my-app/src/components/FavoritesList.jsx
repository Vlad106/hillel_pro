import { Button } from "react-bootstrap";

function FavoritesList({ favorites, onSelectCity }) {
    const removeCity = (city) => {
        const updated = favorites.filter((c) => c !== city);
        localStorage.setItem("favorites", JSON.stringify(updated));
        window.location.reload();
    };

    if (!favorites || favorites.length === 0) return <p>Список пуст</p>;

    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {favorites.map((city) => (
                <li key={city} className="d-flex gap-2 align-items-center mb-1">
                    <Button variant="link" onClick={() => onSelectCity(city)}>
                        {city}
                    </Button>
                    <Button size="sm" variant="outline-danger" onClick={() => removeCity(city)}>
                        ×
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default FavoritesList;
