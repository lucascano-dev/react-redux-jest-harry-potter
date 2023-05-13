import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "TITULOsss",
  subtitle: "SUBTITULO",
  description:
    "Harry Potter es una serie de novelas fantásticas escrita por la autora británica J. K. Rowling, en la que se describen las aventuras del joven aprendiz de magia y hechicería Harry Potter y sus amigos Hermione Granger y Ron Weasley, durante los años que pasan en el Colegio Hogwarts de Magia y Hechicería",
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
