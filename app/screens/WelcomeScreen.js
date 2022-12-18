import React from "react";
import {
    View,
    ImageBackground,
    StyleSheet,
    Image,
    Text,
    Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-red.png")}
                />
                <Text style={styles.text}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}>
                <Button
                    title="Continue to the site"
                    onPress={navigation.navigate("Item")}
                />
            </View>
            <View style={styles.registerButton}>
                <Button title="Register" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
});
export default WelcomeScreen;
