import * as moment from "moment";
export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: Date.now,
    startDate: moment().format("dddd, MMMM Do YYYY, h:mm a"),
    completeDate: null
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now(),
        startDate: moment().format("dddd, MMMM Do YYYY, h:mm a"),
        completeDate: null
      };

      return [...state, newTodo];
    case "TOGGLE_TODO":
      return state.map(item => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    case "CLEAR_COMPLETED":
      return state.map(item => {
        if (item.completed) {
          return {
            ...item,
            completeDate: moment().format("dddd, MMMM Do YYYY, h:mm a")
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};
