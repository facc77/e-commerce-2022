import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import categorieReducer from "./reducers/categorieReducer";
import userReducer from "./reducers/userReducer";

//reducers


export default configureStore({
  reducer: {
   auth: authReducer,
   categories:categorieReducer,
   users:userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});