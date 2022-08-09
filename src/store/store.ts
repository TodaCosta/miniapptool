import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { postAPI } from "../services/PostService";
import userReducer from './reducers/UserSlice'

const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
}) //можно без комбайн, просто исп-ть объект


export const setupStore = () => {
    return configureStore({ //создаём store
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>//тип состояния
export type AppStore = ReturnType<typeof setupStore>//тип стора
export type AppDispatch = AppStore['dispatch']//тип диспатча хранилища (мы не сможем передеать те диспатчи, кот мы не определили)
