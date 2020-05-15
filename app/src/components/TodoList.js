import React, { useReducer } from "react";
import TodoItem from "./TodoItem";
import CompletedItem from "./CompletedItem";
import "./TodoList.css";

const TodoList = ({ state, dispatch }) => {
  const renderTodos = () => {
    return state.map((todo, index) => {
      if (!todo.completeDate) {
        return <TodoItem key={index} {...todo} dispatch={dispatch} />;
      }
    });
  };

  const renderCompleted = () => {
    return state.map((todo, index) =>
      todo.completeDate ? <CompletedItem key={index} {...todo} /> : null
    );
  };

  console.log(state);
  return (
    <div className="TodoList">
      <h2>Todo Items</h2>
      {state.filter(item => item.completeDate !== null).length ===
      state.length ? (
        <p className="TodoList_p">Add some more todos!</p>
      ) : null}
      {renderTodos()}
      {state.filter(item => item.completeDate !== null).length > 0 ? (
        <h2>Completed Items</h2>
      ) : null}
      {renderCompleted()}
    </div>
  );
};

export default TodoList;
