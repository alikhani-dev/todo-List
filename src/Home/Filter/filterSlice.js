import produce from 'immer'

const initialState = {
	colors: [],
	status: 'All',
}

const reducer = produce((state, action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'filter/changeColor': {
			const color = action.payload
			if (state.colors.includes(color)) {
				state.colors = state.colors.filter((item) => item !== color)
			} else {
				state.colors.push(color)
			}
			break
		}
		case 'filter/changeStatus': {
			state.status = action.payload
			break
		}
	}
}, initialState)

export default reducer

// action
export const changeColor = (color) => ({ type: 'filter/changeColor', payload: color })
export const changeStatus = (status) => ({ type: 'filter/changeStatus', payload: status })

// get state
export const getStatus = (state) => state.filter.status
export const getColors = (state) => state.filter.colors
