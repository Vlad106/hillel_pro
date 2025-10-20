function TodoItem({ todo, toggleTodo }) {
    return (
        <li
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
            {todo.text}
        </li>
    );
}

export default TodoItem;
