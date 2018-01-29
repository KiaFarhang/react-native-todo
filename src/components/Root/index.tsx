import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <Text>Write code!</Text>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
    },
});
