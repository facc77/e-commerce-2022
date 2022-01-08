import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";

//reducers


export default configureStore({
  reducer: {
   auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});