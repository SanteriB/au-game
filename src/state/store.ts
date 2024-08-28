import { configureStore } from "@reduxjs/toolkit";
import { appReducer as reducer } from "./reducer";

export const store = configureStore({
    reducer
});
