export interface Photo {
    albumId: number,
    id: number,
    title: string,
    url: string
    thumbnailUrl: string,
}

export interface PhotosState {
    isLoaded: boolean,
    photos: Photo[]
}

export const FETCH_PHOTOS_DATA = "photos/FETCH_DATA"

export interface FetchPhotosDataAction {
    type: typeof FETCH_PHOTOS_DATA,
}