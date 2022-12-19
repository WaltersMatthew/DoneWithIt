import React from "react";
import { View } from "react-native";

import Screen from "./app/Components/Screen";
import ListItem from "./app/Components/ListItem";
import AppIcon from "./app/Components/AppIcon";
export default function App() {
    return (
        <Screen>
            <ListItem
                title="My title"
                subTitle="My subtitle"
                ImageComponent={<AppIcon name="email" />}
            />
        </Screen>
    );
}
