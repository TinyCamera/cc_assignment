import React, { FC } from "react"
import { TouchableHighlight, Text } from "react-native"

interface Props {
    label: string,
    onPress: () => void,
}


const Button: FC<Props> = ({ label, onPress }) => {
    return (
        <TouchableHighlight
            style={{
                padding: 20,
                borderRadius: 10,
                backgroundColor: "gray",
            }}
            onPress={onPress}
        >
            <Text style={{
                fontSize: 18,
                color: "white"
            }}>
                {label}
            </Text>
        </TouchableHighlight>
    )
}

export default Button
