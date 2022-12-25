import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "./app/Components/Screen";

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Button
            title="Click"
            onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
        />
    </Screen>
);

const TweetDetails = ({ route }) => (
    <Screen>
        <Text>Tweet Details {route.params.id}</Text>
        <Text>I am all of the details</Text>
    </Screen>
);

const Stack = createStackNavigator();
const FeedNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
    </Stack.Navigator>
);

const AccountNavigator = () => (
    <Screen>
        <Text>Account Screen</Text>
    </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator} />
        <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}
