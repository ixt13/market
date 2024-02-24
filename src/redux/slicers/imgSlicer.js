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
			const alreadyExist = state.images.find(element => element.photo === data)
			if (data === null) {
				return
			}
			if (isClear) {
				state.images = []
			} else if (!alreadyExist) {
				state.images.push({ photo: data })
			}
		},
		removeImage: (state, action) => {
			return {
				...state,
				images: state.images.filter(item => item.photo !== action.payload),
			}
		},
		setName: (state, action) => {
			return { ...state, name: action.payload }
		},
		setDescription: (state, action) => {
			return { ...state, description: action.payload }
		},
	},
})

export const { setImages, setName, setDescription, setAvatar, removeImage } =
	imageSlicer.actions

export default imageSlicer.reducer
