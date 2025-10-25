import { useState } from "react";
import {Button , Form} from "react-bootstrap";

function SearchBar({ onSearch }) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;
        onSearch(city);
        setCity("");
    };

    return (
        <Form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
            <Form.Control
                type="text"
                placeholder="Введите город"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button type="submit">Поиск</Button>
        </Form>
    );
}

export default SearchBar;
