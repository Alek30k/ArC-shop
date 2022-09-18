import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
