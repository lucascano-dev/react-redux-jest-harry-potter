import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Harry Potter (from Store initialState)",
  subtitle: "Characters (from Store initialState",
  description:
    "Harry Potter is a series of fantasy novels written by British author J.K. Rowling, which describes the adventures of the young witch apprentice Harry Potter and his friends Hermione Granger and Ron Weasley, during their years at Hogwarts School. of Magic and Sorcery",
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    loadAbout: (state, action) => {
      state = action.payload;
    },
  },
});

export const { loadData } = aboutSlice.actions;

export default aboutSlice.reducer;
