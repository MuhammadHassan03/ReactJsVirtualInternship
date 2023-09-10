import { configureStore } from "@reduxjs/toolkit";
import StartSlice from "./Slice/StartSlice";

const store = configureStore({
    reducer : {
        'startSlice': StartSlice,
    }
})

export default store;