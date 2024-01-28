import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	data: [],
	itemData: undefined,
}

export const modalSlicer = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts: (state, action) => {
			let initData = []
			for (let i = 0; i < action.payload.length; i++) {
				action.payload[i].items.map(item => initData.push(item))
			}

			return { ...state, data: initData.sort(() => Math.random() - 0.5) }
		},
		setItemData: (state, action) => {
			state.itemData = action.payload
		},
	},
})

export const { setPosts, setItemData } = modalSlicer.actions

export default modalSlicer.reducer
