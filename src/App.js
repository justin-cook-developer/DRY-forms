import React, { useState, Fragment } from "react";
import { v4 as uuid } from "uuid";

import Header from "./Header";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: uuid(), text: "understand arrow functions", completed: true },
    { id: uuid(), text: "learn angular", completed: false },
    { id: uuid(), text: "build a java server", completed: false },
  ]);
  const [todoToUpdate, setTodoToUpdate] = useState({});

  const createTodo = (text, completed) => {
    setTodos([...todos, { id: uuid(), text, completed }]);
  };

  const updateTodo = (todoId) => (text, completed) => {
    setTodos(
      todos.map((t) => (t.id !== todoId ? t : { ...t, text, completed }))
    );
    setTodoToUpdate({});
  };

  return (
    <Fragment>
      <Header />
      <main>
        <section className="section">
          <TodoList todos={todos} setTodoToUpdate={setTodoToUpdate} />
        </section>
        <section className="section">
          <h2 className="has-text-centered subtitle">Create Todo</h2>
          <TodoForm createOrUpdateTodo={createTodo} />
        </section>
        {todoToUpdate.id && (
          <section className="section">
            <h2 className="has-text-centered subtitle">Update Todo</h2>
            <TodoForm
              createOrUpdateTodo={updateTodo(todoToUpdate.id)}
              initialState={todoToUpdate}
            />
          </section>
        )}
      </main>
    </Fragment>
  );
}

export default App;
