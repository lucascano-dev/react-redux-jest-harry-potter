//character es personajes
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  comment: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    changeForms: (state, action) => {
      const { name, email, comment } = action.payload;

      state.name = name;
      state.email = email;
      state.comment = comment;
    },
  },
});

export const { changeForms } = formSlice.actions;

export default formSlice.reducer;
