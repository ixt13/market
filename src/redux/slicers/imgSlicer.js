import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	images: [],
	name: '',
	description: '',
	avatar: '',
}

export const imageSlicer = createSlice({
	name: 'image',
	initialState,
	reducers: {
		setAvatar: (state, action) => {
			return { ...state, avatar: action.payload }
		},
		setImages: (state, action) => {
			const { data, isClear } = action.payload

			if (isClear) {
				state.images = []
			} else state.images.push({ photo: data })
		},
		setName: (state, action) => {
			return { ...state, name: action.payload }
		},
		setDescription: (state, action) => {
			return { ...state, description: action.payload }
		},
	},
})

export const { setImages, setName, setDescription, setAvatar } =
	imageSlicer.actions

export default imageSlicer.reducer
