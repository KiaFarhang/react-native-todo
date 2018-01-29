import * as React from "react";
import { Text } from "react-native";
import { ITodo as Props } from "../../types";

const Todo = ({ text }: Props) => {
    return (
        <Text>
            {text}
        </Text>
    );
};

export default Todo;
