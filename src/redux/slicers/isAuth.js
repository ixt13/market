import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authStatus: false,
};

export const modalSlicer = createSlice({
  name: "authentification",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return { ...state, authStatus: action.payload };
    },
  },
});

export const { setAuth } = modalSlicer.actions;

export default modalSlicer.reducer;
