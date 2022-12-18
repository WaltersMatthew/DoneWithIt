import React from "react";
import { View } from "react-native";
import AppButton from "./app/Components/AppButton";
import AppText from "./app/Components/AppText";

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <AppButton
                title="Login"
                onPress={() => console.log("button pressed")}
            />
        </View>
    );
}
