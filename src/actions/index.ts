import * as constants from "../constants";

export interface IAction {
    type: string;
}

export interface IAddTodo {
    type: constants.ADD_TODO;
    text: string;
}

export const addTodo = (text: string): IAddTodo => ({
    text,
    type: constants.ADD_TODO,
});
