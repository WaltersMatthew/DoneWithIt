import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
    return (
        <NavigationContainer theme={navigationTheme}>
            <AuthNavigator />
        </NavigationContainer>
    );
}
