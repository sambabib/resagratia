import { configureStore } from "@reduxjs/toolkit";
import windowDimensionReducer from "./reducers/windowDimensionSlice";

export default configureStore({
    reducer: {
        windowDimension: windowDimensionReducer
    }
})