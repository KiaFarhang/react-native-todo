import * as react from "react";
import { TextInput } from "react-native";
import { IInput as Props } from "../../types";

const Input = ({ onSubmit, placeholder }: Props) => {
    return (
        <TextInput
            onSubmitEditing={(event) => onSubmit(event.nativeEvent.text)}
            placeholder={placeholder}
        />
    );
};

export default Input;
