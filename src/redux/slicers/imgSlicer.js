import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
  name: "",
  description: "",
};

export const imageSlicer = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images.push(action.payload);
    },
    setName: (state, action) => {
      return { ...state, name: action.payload };
    },
    setDescription: (state, action) => {
      return { ...state, description: action.payload };
    },
  },
});

export const { setImages, setName, setDescription } = imageSlicer.actions;

export default imageSlicer.reducer;
