import { useState } from "react";

export function useTodos(initialTodos = []) {
    const [todos, setTodos] = useState(initialTodos);

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, completed: false };
        setTodos([...todos, newTodo]);
    };

    return { todos, toggleTodo, addTodo };
}
