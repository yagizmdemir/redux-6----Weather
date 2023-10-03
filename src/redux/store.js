import { configureStore } from "@reduxjs/toolkit";
import skySlice from "./slice/sky.slice";

export const store = configureStore({
    reducer: {
        sky: skySlice
    }
})