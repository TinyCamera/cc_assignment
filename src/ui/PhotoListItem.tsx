import React, { FC, memo, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Photo } from "../features/photos/photosTypes";
import { WIDTH } from "./sizes";

interface Props {
    photo: Photo
}

const size = WIDTH * .6

const PhotoListItem: FC<Props> = ({ photo }) => {
    const [sources, setSources] = useState([])

    useEffect(() => {
        setSources(
            [
                {
                    uri: photo.url,
                    width: 600,
                    height: 600,
                    cache: "force-cache"
                },
                {
                    uri: photo.thumbnailUrl,
                    width: 150,
                    height: 150,
                    cache: "force-cache"
                }
            ]
        )
    }, [photo])

    return (
        <View style={{
            height: size,
            width: size,

            shadowColor: "#000",
            shadowOffset: {
                width: 3,
                height: 6,
            },
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 5,
        }}>
            <Image
                style={{
                    backgroundColor: "lightblue",
                    borderWidth: 2,
                    borderColor: 'black',
                    borderRadius: 20,
                    height: size,
                    width: size,

                }}
                source={sources}
            />
            <View style={{
                // backgroundColor: 'blue',
                zIndex: 10,
                position: 'absolute',
                height: "100%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                transform: [{
                    rotate: "45deg"
                }]
            }}>
                <Text style={{
                    textAlign: 'center'
                }}>
                    {photo.title}
                </Text>
            </View>
        </View >
    )

}

export default memo(PhotoListItem) 