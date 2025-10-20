import { useTodos } from "./UseTodo.jsx";
import TodoItem from "./TodoItem";

function TodoList() {
    const { todos, toggleTodo } = useTodos([
        { id: 1, text: "Купить молоко", completed: false },
        { id: 2, text: "Помыть пол", completed: true },
    ]);

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
}

export default TodoList;
