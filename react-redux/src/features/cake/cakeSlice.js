import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numofCakes: 20, // default number of cakes in the store.
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numofCakes--;
    },
    restocked: (state, action) => {
      state.numofCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
