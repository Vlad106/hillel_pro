import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function UserForm({ addUser }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [photo, setPhoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || age === "" || !photo) return;

        const newUser = {
            id: Date.now(),
            firstName,
            lastName,
            age,
            photo: URL.createObjectURL(photo),
        };

        addUser(newUser);

        setFirstName("");
        setLastName("");
        setAge("");
        setPhoto(null);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Імʼя</Form.Label>
                <Form.Control
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Прізвище</Form.Label>
                <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Вік</Form.Label>
                <Form.Control
                    type="number"
                    min="0"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Фото</Form.Label>
                <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    required
                />
            </Form.Group>

            <Button type="submit" disabled={!firstName || !lastName || age === "" || !photo}>
                Додати
            </Button>
        </Form>
    );
}

export default UserForm;
