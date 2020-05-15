import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import "./TodoForm.css";

const TodoForm = ({ dispatch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    value !== "" && dispatch({ type: "ADD_TODO", payload: value });
    setValue("");
  };

  const handleClear = e => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit} className="TodoForm">
        <Input
          className="TodoForm_input"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="TodoForm_buttons">
          <Button negative type="button" onClick={handleClear}>
            Clear Completed
          </Button>
          <Button primary type="submit">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
