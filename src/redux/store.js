import { configureStore } from "@reduxjs/toolkit"
import dataReducer from "../redux/utils/dataSLice"

export const store = configureStore({
    reducer: {
        data: dataReducer,
    },
})
