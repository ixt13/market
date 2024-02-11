import { configureStore } from '@reduxjs/toolkit'
import imgSlicer from '../slicers/imgSlicer'
import authSlicer from '../slicers/isAuth'
import postsSlicer from '../slicers/postsSlicer'
import modalSlicer from '../slicers/showModals'
export const store = configureStore({
	reducer: {
		modal: modalSlicer,
		authentification: authSlicer,
		image: imgSlicer,
		posts: postsSlicer,
	},
})
