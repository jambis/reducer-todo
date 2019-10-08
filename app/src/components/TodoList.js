import React, { useReducer } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
const TodoList = ({ state, dispatch }) => {
  const renderItems = () => {
    return state.map(todo => <TodoItem {...todo} dispatch={dispatch} />);
  };
  console.log(state);
  return <div className="TodoList">{renderItems()}</div>;
};

export default TodoList;
