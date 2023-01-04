import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../Components/ActivityIndicator";
import Card from "../Components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../Components/Screen";
import AppText from "../Components/AppText";
import AppButton from "../Components/AppButton";
import useApi from "../hooks/useApi";

// IF NO BACKEND:
// const listings = [
//     {
//         id: 1,
//         title: "Red jacket for sale",
//         price: 100,
//         image: require("../assets/jacket.jpg"),
//     },
//     {
//         id: 2,
//         title: "Couch in great condition",
//         price: 1000,
//         image: require("../assets/couch.jpg"),
//     },
// ];

function ListingsScreen({ navigation }) {
    //If using backend:
    const {
        data: listings,
        error,
        loading,
        request: loadListings,
    } = useApi(listingsApi.getListings);

    useEffect(() => {
        loadListings(1, 2, 3);
    }, []);
    //--To here

    return (
        <Screen style={styles.screen}>
            {error && (
                <>
                    <AppText>Couldn't retrieve the listings.</AppText>
                    <AppButton title="Retry" onPress={loadListings} />
                </>
            )}
            <ActivityIndicator visible={loading} />
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={`$${item.price}`}
                        //for no backend:
                        // imageUrl={item.image}
                        //for backend:
                        imageUrl={item.images[0].url}
                        onPress={() =>
                            navigation.navigate(routes.LISTING_DETAILS, item)
                        }
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
});

export default ListingsScreen;
