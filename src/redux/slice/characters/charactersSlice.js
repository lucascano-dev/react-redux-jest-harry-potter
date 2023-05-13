import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    loadData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loadData } = charactersSlice.actions;

export default charactersSlice.reducer;
