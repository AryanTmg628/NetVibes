import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./reducers";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
const persistConfig = {
  key: "root",
  whiteList: ["auth"],
  blackList: [],
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);

export default {
  store,
  persistor,
};
