import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../utils/reducer";
import { thunk } from "redux-thunk";

const globaStore = configureStore({
    reducer:{ weather: weatherReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default globaStore;