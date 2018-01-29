import * as React from "react";
import { StyleSheet, View } from "react-native";
import { createStore } from "redux";

import { todoApp } from "../../reducers";

import { Provider } from "react-redux";

import AddTodoInput from "../containers/AddTodoInput";
import VisibleTodoList from "../containers/VisibleTodoList";

const store = createStore(todoApp);

const App = () => {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <VisibleTodoList />
                <AddTodoInput />
            </View>
        </Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
});
