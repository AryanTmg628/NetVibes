import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
