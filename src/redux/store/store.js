import { configureStore } from "@reduxjs/toolkit";
import modalSlicer from "../slicers/showModals";
import authSlicer from "../slicers/isAuth";
import imgSlicer from "../slicers/imgSlicer";
export const store = configureStore({
  reducer: {
    modal: modalSlicer,
    authentification: authSlicer,
    image: imgSlicer,
  },
});
