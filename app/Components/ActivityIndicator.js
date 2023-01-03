import React from "react";
import Lottie from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
    if (!visible) return null;
    return (
        <Lottie
            autoPlay
            loop
            source={require("../assets/animations/loader.json")}
        />
    );
}

export default ActivityIndicator;
