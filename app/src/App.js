import React, { useReducer, useEffect } from "react";
import { Icon } from "semantic-ui-react";
import { initialState, reducer } from "./reducers/reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(
    reducer,
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : initialState
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);
  return (
    <div className="App">
      <h1>
        <Icon name="tasks" />
        &nbsp; Try Hard Todo App
      </h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
