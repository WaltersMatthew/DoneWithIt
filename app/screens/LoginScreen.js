import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";

import Screen from "../Components/Screen";
import AppButton from "../Components/AppButton";
import AppTextInput from "../Components/AppTextInput";

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")}
            />
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChageText={handleChange("email")}
                            placeholder="email"
                            textContentType="emailAddress"
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChageText={handleChange("password")}
                            placeholder="password"
                            secureTextEntry={true}
                            textContentType="password"
                        />
                        <AppButton title="Login" onPress={handleSubmit} />
                    </>
                )}
            </Formik>
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
