import React, { FC, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Photo } from "../features/photos/photosTypes";
import PhotosSelector from "../features/photos/PhotosSelector";
import { View, Text, FlatList, ListRenderItem } from "react-native";
import PhotoListItem from "./PhotoListItem";
import { HEIGHT } from "./sizes";
import Button from "./Button";
import { shuffle } from "../features/photos/photosSlice";

const renderItem: ListRenderItem<Photo> = ({ item }) => {
    return <PhotoListItem photo={item} />
}

const ListSeperator = () =>
    <View
        style={{
            width: 30,
        }}
    />

const keyExtractor = (item) => "key." + item.id

const useShuffleCallback = () => {
    const dispatch = useDispatch()
    return useCallback(() => {
        dispatch(shuffle())
    }, [])

}

const PhotoList: FC = () => {

    const photos: Photo[] = useSelector(PhotosSelector.photos)
    const shuffleCallback = useShuffleCallback()

    return (
        <View style={{
            paddingTop: 40,
            flex: 1,
            justifyContent: 'flex-start',
            backgroundColor: 'lightgray',
        }}>
            <FlatList
                style={{
                    flex: 1,
                }}
                horizontal
                shouldRasterizeIOS
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                initialNumToRender={2}
                windowSize={10}
                data={photos}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={ListSeperator}
                ListHeaderComponent={ListSeperator}
            />
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Button
                    label="Shuffle!"
                    onPress={shuffleCallback}
                />
            </View>
        </View>
    )
}

export default PhotoList