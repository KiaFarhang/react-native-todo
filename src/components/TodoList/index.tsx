import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import styles from "../../styles";
import { ITodo } from "../../types";
import Todo from "../Todo";

interface IProps {
    todos: ITodo[];
}

const style = StyleSheet.create(styles.todoList as any);

const TodoList = ({ todos }: IProps) => {
    const todoComponents = todos.map((todo: ITodo, index: number) => {
        return <Todo text={todo.text} completed={todo.completed} />;
    });
    return (
        <View style={style}>
            {todoComponents}
        </View>
    );
};

export default TodoList;
