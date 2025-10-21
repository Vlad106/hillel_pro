import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function UserList({ users }) {
    if (users.length === 0) return <p>Пользователи отсутствуют</p>;

    return (
        <div>
            {users.map((user) => (
                <Card key={user.id} className="mb-3">
                    {user.photo && (
                        <Card.Img variant="top" src={user.photo} style={{ maxHeight: "200px", objectFit: "cover" }} />
                    )}
                    <Card.Body>
                        <Card.Title>
                            {user.firstName} {user.lastName}
                        </Card.Title>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Вік: {user.age}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default UserList;
