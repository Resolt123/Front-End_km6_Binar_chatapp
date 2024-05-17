import { combineReducers } from "@reduxjs/toolkit";
import messageReducer from "./messageReducer";
import authReducer from "./authSlice";

// We have reducers, it will called in store to create an global state
export default combineReducers({
  auth: authReducer,
  message: messageReducer,
});
