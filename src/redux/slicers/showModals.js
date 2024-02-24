import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLogModal: false,
	isRegModal: false,
	isAddItemModal: false,
	isItemSettingsModal: false,
}

export const modalSlicer = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setIsLogModal: (state, action) => {
			return { ...state, isLogModal: action.payload }
		},
		setIsRegModal: (state, action) => {
			return { ...state, isRegModal: action.payload }
		},
		setIsAddItemModal: (state, action) => {
			return { ...state, isAddItemModal: action.payload }
		},
		setIsSettingsModal: (state, action) => {
			return { ...state, isItemSettingsModal: action.payload }
		},
	},
})

export const {
	setIsLogModal,
	setIsRegModal,
	setIsAddItemModal,
	setIsSettingsModal,
} = modalSlicer.actions

export default modalSlicer.reducer
