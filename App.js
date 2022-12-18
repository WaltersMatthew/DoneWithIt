import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home">
                    {(props) => <WelcomeScreen {...props} />}
                </Stack.Screen>
                <Stack.Screen name="Item" component={ViewImageScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
