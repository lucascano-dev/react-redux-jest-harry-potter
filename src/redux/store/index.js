import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../slice/form/formSlice";
import charactersSlice from "../slice/characters/charactersSlice"; //Se trae el export charactersSlice.reducer de charactersSlice.js
import aboutSlice from "../slice/about/aboutSlice";

export const store = configureStore({
  reducer: {
    form: formSlice,
    characters: charactersSlice,
    about: aboutSlice,
  },
});
