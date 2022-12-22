import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "./app/Components/Screen";
import AppButton from "./app/Components/AppButton";
import ImageInputList from "./app/Components/ImageInputList";

export default function App() {
    const [imageUris, setImageUris] = useState([]);

    const handleAdd = (uri) => {
        setImageUris([...imageUris, uri]);
    };

    const handleRemove = (uri) => {
        setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
    };

    return (
        <Screen>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
        </Screen>
    );
}
