import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../Components/AppText";

import colors from "../config/colors";
import ListItem from "../Components/ListItem";

// const listing = {
//     image: require("../assets/jacket.jpg"),
//     title: "Red Jacket",
//     price: 100,
// };

function ListingDetailsScreen({ route }) {
    const listing = route.params;
    console.log(listing);
    return (
        <View>
            <Image style={styles.image} source={listing.images[0]} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/headshot.jpg")}
                        title="Matt Walters"
                        subTitle="5 listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 40,
    },
});

export default ListingDetailsScreen;
