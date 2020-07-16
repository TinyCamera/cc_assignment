import { PhotosState, Photo } from './photosTypes'
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: PhotosState = {
    isLoaded: false,
    photos: []
}

export const photosSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {
        load: (state, action: PayloadAction<Photo[]>) => {
            state.isLoaded = true
            state.photos = action.payload
        },
        shuffle: (state) => {
            state.photos = recursivelyShuffle([...state.photos])
        }
    }
})

const recursivelyShuffle = (items: any[]) => {
    if (items.length < 20) {
        return shuffleSmallList(items)
    }

    const p = Math.floor(Math.random() * items.length)

    const leftHalf = items.slice(0, p)
    const rightHalf = items.slice(p)

    return [...recursivelyShuffle(rightHalf), ...recursivelyShuffle(leftHalf)]
}

const shuffleSmallList = (items: any[]) => {
    for (let i = 0; i < items.length; i++) {
        const p = Math.floor(Math.random() * items.length)

        const temp = items[p]
        items[p] = items[i]
        items[i] = temp
    }

    return items
}

export const { load, shuffle } = photosSlice.actions