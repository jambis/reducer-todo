import React from "react";
import { Checkbox } from "semantic-ui-react";
import "./TodoItem.css";

const TodoItem = props => {
  return (
    <>
      <Checkbox
        className="TodoItem_checkbox"
        fitted={false}
        label={props.item}
        checked={props.completed}
        onClick={() =>
          props.dispatch({ type: "TOGGLE_TODO", payload: props.id })
        }
      />
      <span className="TodoItem_span">Started {props.startDate}</span>
    </>
  );
};

export default TodoItem;
