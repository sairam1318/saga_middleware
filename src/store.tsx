import "regenerator-runtime/runtime";
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";
import { sampleReducer } from "./slice/index";
import { sampleSaga, nameSaga } from "./slice/saga";
import { templateSaga } from "./slice/templateSaga";
import { createStore } from "redux";

export function StoreApp() {
  // creating a saga middle ware...
  const sagaMiddleWare = createSagaMiddleware();
  applyMiddleware(sagaMiddleWare);
  const store = configureStore({
    reducer: sampleReducer,
    middleware: (def) => [...def(), sagaMiddleWare]
  });

  sagaMiddleWare.run(sampleSaga);
  sagaMiddleWare.run(templateSaga);
  return store;
}
