import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import categorieReducer from "./reducers/categorieReducer";

//reducers


export default configureStore({
  reducer: {
   auth: authReducer,
   categories:categorieReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});