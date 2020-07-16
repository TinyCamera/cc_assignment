import { Photo } from './photosTypes'
import { RootState } from './../../store'


const isLoaded = (state: RootState): boolean => state.photos.isLoaded
const photos = (state: RootState): Photo[] => state.photos.photos

export default {
    isLoaded, photos
}