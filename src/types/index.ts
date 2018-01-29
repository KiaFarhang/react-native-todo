export interface ITodo {
    completed: boolean;
    text: string;
}

export interface IAppState {
    filter: "SHOW_ALL";
    todos: ITodo[];
}
