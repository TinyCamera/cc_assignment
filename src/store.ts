import { photosSlice } from './features/photos/photosSlice'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from './rootSaga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from "@react-native-community/async-storage"

const persistConfig = {
    key: 'root',
    storage,
}


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    photos: photosSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleware]
})

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>