// types &  redux:
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Actions, Color, RootState } from '..'

export enum EnumActions {
	All = 'All',
	Pending = 'Pending',
	Complected = 'Complected',
}

type InitState = { colors: Color[]; status: Actions }
const initialState: InitState = { colors: [], status: 'All' }

const reducer = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeColor(state, action: PayloadAction<Color>) {
			const color = action.payload
			if (state.colors.includes(color)) state.colors = state.colors.filter(item => item !== color)
			else state.colors.push(color)
		},
		changeStatus(state, action) {
			state.status = action.payload
		},
	},
})

export const { changeColor, changeStatus } = reducer.actions
export default reducer.reducer

// get state
export const getStatus = (state: RootState) => state.filter.status
export const getColors = (state: RootState) => state.filter.colors

// get  Actions value & key
export const getActionsValue = Object.values(EnumActions)
export const getActionsKeys = Object.keys(EnumActions)
