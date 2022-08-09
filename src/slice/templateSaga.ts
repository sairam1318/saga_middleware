import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, put } from "redux-saga/effects";
import { sampleActions as actions } from "./index";
export function* changeAgeSage(action: PayloadAction<number>) {
  yield put(actions.ageLoaded(action.payload));
}
export function* templateSaga() {
  yield takeLatest(actions.getChangeLoaded.type, changeAgeSage);
}
