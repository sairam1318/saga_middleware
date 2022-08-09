import { PayloadAction } from "@reduxjs/toolkit";
import { takeLatest, put } from "redux-saga/effects";
import { sampleActions as actions } from "./index";
export function* nameSaga(action: PayloadAction<string>) {
  yield put(actions.nameLoaded(action.payload));
}
export function* sampleSaga() {
  yield takeLatest(actions.getNameDisplay.type, nameSaga);
}
