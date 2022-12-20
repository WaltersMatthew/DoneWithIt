import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";

import Screen from "../Components/Screen";
import AppButton from "../Components/AppButton";
import AppTextInput from "../Components/AppTextInput";

function LoginScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                onChageText={(text) => setEmail(text)}
                placeholder="email"
                textContentType="emailAddress"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChageText={(text) => setPassword(text)}
                placeholder="password"
                secureTextEntry={true}
                textContentType="password"
            />
            <AppButton
                title="Login"
                onPress={() =>
                    console.log(`email = ${email}, password =  ${password}`)
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});
export default LoginScreen;
