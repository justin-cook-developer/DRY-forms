import React, { useState, useEffect } from "react";

const TodoForm = ({ createOrUpdateTodo, initialState = {} }) => {
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");
  const [completed, setCompleted] = useState(false);

  // useEffect removes the need for a key attribute
  // this is the better way to update the state
  useEffect(() => {
    // make sure we have a valid todo as initialState
    // don't want to set undefined in the create form
    if (initialState.id) {
      setText(initialState.text);
      setCompleted(initialState.completed);
    }
  }, [initialState]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (text.length) {
      createOrUpdateTodo(text, completed);
      setText("");
      setCompleted(false);
      setTextError("");
    } else {
      setTextError("You must enter text for a todo.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Text</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={text}
            onChange={(ev) => setText(ev.target.value)}
          />
        </div>
        {textError.length !== 0 && <p class="help is-danger">{textError}</p>}
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            Completed:
            <input
              style={{ marginLeft: ".5rem" }}
              type="checkbox"
              checked={completed}
              onClick={() => setCompleted(!completed)}
            />
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control has-text-centered">
          <button className="button is-success is-small" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
