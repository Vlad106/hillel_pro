import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import FavoritesList from "./FavoritesList";

function FavoritesWrapper({ currentCity, onSelectCity }) {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("favorites");
        if (saved) setFavorites(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addCurrentCity = () => {
        if (currentCity && !favorites.includes(currentCity)) {
            setFavorites([...favorites, currentCity]);
        }
    };

    return (
        <div className="mt-3">
            {currentCity && (
                <Button className="mb-2" onClick={addCurrentCity}>
                    Добавить в избранное
                </Button>
            )}
            <FavoritesList favorites={favorites} onSelectCity={onSelectCity} />
        </div>
    );
}

export default FavoritesWrapper;
