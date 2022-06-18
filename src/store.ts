import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/index"

const store = configureStore({
  reducer: {
    users: userReducer,
  },
})

export default store
