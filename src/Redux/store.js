import { configureStore } from '@reduxjs/toolkit'
import { actions } from '../Home/Filter/filterSlice.js'
import reducer from './reducer.js'

const preloadedState = {
	tasks: {
		Tasks: {
			0: { id: 0, header: 'example', description: 'some text ...', completed: true, color: 'primary' },
		},
	},
	filter: {
		colors: [],
		status: actions.All,
	},
}

const store = configureStore({
	reducer,
	devTools: process.env.NODE_ENV !== 'production',
	preloadedState,
})

export default store
