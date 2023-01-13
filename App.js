import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import ListingsScreen from "./app/screens/ListingsScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import UploadScreen from "./app/screens/UploadScreen";
import AccountNavigator from "./app/navigation/AccountNavigator";
import AccountScreen from "./app/screens/AccountScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import FeedNavigator from "./app/navigation/FeedNavigator";
import { NavigationContainer } from "@react-navigation/native";
// export default function App() {
//     const demo = async () => {
//         try {
//             await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
//             const value = await AsyncStorage.getItem("person");
//             const person = JSON.parse(value);
//             console.log(person);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     demo();
//     return null;
// }
export default function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
