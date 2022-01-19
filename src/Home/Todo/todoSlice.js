import { getColors, getStatus, actions } from '../Filter/filterSlice'
import { createSelector } from 'reselect'
import { createSlice, nanoid } from '@reduxjs/toolkit'

export const colors = [
	{ bg: 'secondary', name: 'gray' },
	{ bg: 'dark', name: 'black' },
	{ bg: 'primary', name: 'Blue Dress' },
	{ bg: 'info', name: 'blue' },
	{ bg: 'success', name: 'green' },
	{ bg: 'danger', name: 'red' },
	{ bg: 'warning', name: 'orange' },
]

const initialState = {
	Tasks: {
		0: { id: 0, header: 'example', description: 'some text ...', completed: true, color: 'primary' },
	},
}

// get state
export const selectTasks = (state) => state.tasks.Tasks
export const selectIds = (state) => Object.keys(state.tasks.Tasks)
const selectTaskValues = (state) => Object.values(selectTasks(state))

export const countTask = createSelector(selectIds, (task) => task.length)
export const filterTodos = createSelector(getColors, getStatus, selectTaskValues, (colors, status, todos) => {
	let newTodo = []

	if (status === actions.All) {
		newTodo = todos
	} else {
		newTodo = todos.filter((todo) => {
			const bool = status === actions.Pending ? false : true
			return todo.completed === bool
		})
	}

	if (colors.length !== 0) {
		newTodo = newTodo.filter((todo) => colors.includes(todo.color))
	}

	return newTodo.map((item) => item.id)
})

const reducer = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		todoToggle(state, action) {
			const id = action.payload
			state.Tasks[id].completed = !state.Tasks[id].completed
		},
		todoDeleted(state, action) {
			const id = action.payload
			delete state.Tasks[id]
		},
		todoAllComplected(state) {
			Object.values(state.Tasks).forEach((todo) => {
				todo.completed = true
			})
		},
		todoRemoveAllComplected(state) {
			Object.values(state.Tasks).forEach(({ completed, id }) => {
				if (completed) {
					delete state.Tasks[id]
				}
			})
		},
		todoUpdate: {
			reducer(state, action) {
				const { id, data } = action.payload
				state.Tasks[id] = { ...state.Tasks[id], ...data }
			},
			prepare(id, data) {
				return { payload: { id, data } }
			},
		},
		todoAdded: {
			reducer(state, action) {
				const todo = action.payload
				state.Tasks[todo.id] = todo
			},
			prepare(todo) {
				return { payload: { ...todo, id: nanoid(5), completed: false } }
			},
		},
	},
})
export const { todoToggle, todoDeleted, todoAllComplected, todoRemoveAllComplected, todoUpdate, todoAdded } =
	reducer.actions

export default reducer.reducer
