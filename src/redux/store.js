import {configureStore} from "@reduxjs/toolkit";

//reducers


export default configureStore({
  reducer: {
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});