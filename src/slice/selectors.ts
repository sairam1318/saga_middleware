import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./index";
const selectSlice = (state: any) => state || initialState;
export const selectSample = createSelector([selectSlice], (state) => state);
export const selectName = createSelector([selectSlice], (state) => state);
