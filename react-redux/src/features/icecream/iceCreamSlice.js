import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIcreams: 20,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcreams--;
    },
    restocked: (state, actions) => {
      state.numOfIcreams += actions.payload;
    },
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
