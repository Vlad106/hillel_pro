import { useState } from "react";

export function useUsers() {
    const [users, setUsers] = useState([]);

    const addUser = (newUser) => {
        setUsers(prev => [...prev, newUser]);
    };

    return { users, addUser };
}
