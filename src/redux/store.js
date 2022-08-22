import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) return next(action);

  console.log("type = ", action.type);
  console.log("payload = ", action.payload);
  console.log("currentState = ", store.getState());

  next(action);
  console.log("next state = ", store.getState());
};

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const composeEnchanher =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnchancers = composeEnchanher(applyMiddleware(...middleware));

const store = createStore(persistedReducer, undefined, composedEnchancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
