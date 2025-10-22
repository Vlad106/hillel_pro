function TodoItem({ todo, toggleTodo }) {
    return (
        <li
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "6px",
            }}
        >
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
        </li>
    );
}

export default TodoItem;

