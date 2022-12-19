import React from "react";

import AppTextInput from "./app/Components/AppTextInput";
import Screen from "./app/Components/Screen";
export default function App() {
    return (
        <Screen>
            <AppTextInput placeholder="Username" icon="email" />
        </Screen>
    );
}
