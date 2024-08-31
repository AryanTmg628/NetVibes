import { combineReducers } from "@reduxjs/toolkit";
import domainReducer from "./domain/domainSlice";

export const RootReducer = combineReducers({
  // domain
  domain: domainReducer,
});
