import React from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../Components/ListItem";
import Screen from "../Components/Screen";

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/headshot.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/headshot.jpg"),
    },
];
function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
