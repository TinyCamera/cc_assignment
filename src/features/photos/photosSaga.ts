import { put, select, take } from "redux-saga/effects";
import PhotosSelector from "./PhotosSelector";
import { load } from './photosSlice';
import { Photo } from "./photosTypes";
import { REHYDRATE } from "redux-persist";

function* fetchPhotosData() {
    yield take(REHYDRATE)
    const isLoaded: boolean = yield select(PhotosSelector.isLoaded)

    if (isLoaded) {
        return
    }

    console.log('fetching photo data')
    const response: Response = yield fetch("http://jsonplaceholder.typicode.com/photos")
    const jsonData: Photo[] = yield response.json()

    yield put(load(jsonData))
}

export default fetchPhotosData