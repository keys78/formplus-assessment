// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import { templatesApi } from "../services/templatesApi";


// export const store = configureStore({
//     reducer: {
//         [templatesApi.reducerPath]: templatesApi.reducer,
//     },
//     middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(templatesApi.middleware)
// });

// setupListeners(store.dispatch)

import { configureStore } from "@reduxjs/toolkit";
// import usersReducer from "../features/users/usersSlice";
import templatesReducer from "../redux/templatesSlice"

export const store = configureStore({
  reducer: {
    templates: templatesReducer,
  },
});