import { useTodos } from "./UseTodo.jsx";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoList() {
    const { todos, toggleTodo, addTodo } = useTodos([
        { id: 1, text: "Купить молоко", completed: false },
        { id: 2, text: "Помыть пол", completed: true },
    ]);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {}
            <TodoForm addTodo={addTodo} />

            {}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
