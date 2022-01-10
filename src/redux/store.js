import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import productsReducer from "./reducers/productsReducer";
import categorieReducer from "./reducers/categorieReducer";
import userReducer from "./reducers/userReducer";

//reducers

export default configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    categories: categorieReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
