import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
  name: "",
  age: 24
};
const slice = createSlice({
  name: "Sample",
  initialState,
  reducers: {
    getNameDisplay(state, action: PayloadAction<string>) {
      console.log("called", action.payload);
    },
    nameLoaded(state, action: PayloadAction<string>) {
      console.log("callled after saga called...", action.payload);
      state.name = action.payload;
    },
    getChangeLoaded(state, action: PayloadAction<number>) {
      // load saga...
    },
    ageLoaded(state, action: PayloadAction<number>) {
      // saga loaded..
      state.age = action.payload;
    }
  }
});
export const { actions: sampleActions } = slice;
export const sampleReducer: any = slice.reducer;
