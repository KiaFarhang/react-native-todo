import * as actions from "../actions";
import * as types from "../types";
import { initialState } from "./initialState";

const todos = (state: types.ITodo[] = [], action: actions.IAction): types.ITodo[] => {
    switch (action.type) {
        case "ADD_TODO":
            const theAction = action as actions.IAddTodo;
            return state.concat([{ text: theAction.text, completed: false }]);
        default:
            return state;
    }
};

export const todoApp = (state: types.IAppState = initialState, action: actions.IAction): types.IAppState => {
    return {
        filter: "SHOW_ALL",
        todos: todos(state.todos, action),
    };
};
