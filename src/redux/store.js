import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import productsReducer from "./reducers/productsReducer";

//reducers

export default configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
