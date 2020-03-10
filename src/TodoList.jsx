import React from "react";

const TodoList = ({ todos, setTodoToUpdate }) => {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <li className="list-item has-text-centered" key={todo.id}>
          <span onClick={() => setTodoToUpdate(todo)}>{todo.text}</span>
          <label className="checkbox" style={{ marginLeft: ".5rem" }}>
            <input type="checkbox" checked={todo.completed} />
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
