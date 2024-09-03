import { combineReducers } from "@reduxjs/toolkit";
import domainReducer from "./domain/domainSlice";
import { authReducer } from "./auth/auth-slice";

export const RootReducer = combineReducers({
  // domain
  domain: domainReducer,
  auth: authReducer,
});
