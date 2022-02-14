import { createSlice } from '@reduxjs/toolkit'

export const actions = {
	All: 'All',
	Complected: 'Complected',
	Pending: 'Pending',
}

const initialState = {
	colors: [],
	status: actions.All,
}

const reducer = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeColor(state, action) {
			const color = action.payload
			if (state.colors.includes(color)) {
				state.colors = state.colors.filter((item) => item !== color)
			} else {
				state.colors.push(color)
			}
		},
		changeStatus(state, action) {
			state.status = action.payload
		},
	},
})
export const { changeColor, changeStatus } = reducer.actions

export default reducer.reducer

// get state
export const getStatus = (state) => state.filter.status
export const getColors = (state) => state.filter.colors

// get  Actions value & key
export const getActionsValue = Object.values(actions)
export const getActionsKeys = Object.keys(actions)
