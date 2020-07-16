import { all } from "redux-saga/effects"
import photosSaga from "./features/photos/photosSaga"

function* rootSaga() {
    yield all([
        photosSaga()
    ])
}

export default rootSaga