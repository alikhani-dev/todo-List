import { v4 as uuidv4 } from 'uuid'
import produce from 'immer'
import { getColors, getStatus, actions } from '../Filter/filterSlice'
import { createSelector } from 'reselect'

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

const reducer = produce((state, action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case 'todos/Add': {
			const todo = action.payload
			const UUID = uuidv4()
			state.Tasks[UUID] = { ...todo, id: UUID, completed: false }
			break
		}

		case 'todos/Delete': {
			const id = action.payload
			delete state.Tasks[id]
			break
		}

		case 'todos/Toggle': {
			const id = action.payload
			state.Tasks[id].completed = !state.Tasks[id].completed
			break
		}

		case 'todos/Update': {
			const { id, data } = action.payload
			state.Tasks[id] = { ...state.Tasks[id], ...data }
			break
		}

		case 'todo/AllComplected': {
			Object.values(state.Tasks).forEach((todo) => {
				todo.completed = true
			})
			break
		}

		case 'todo/RemoveAllComplected': {
			Object.values(state.Tasks).forEach(({ completed, id }) => {
				if (completed) {
					delete state.Tasks[id]
				}
			})
			break
		}
	}
}, initialState)

export default reducer

// actions
export const todoAdded = (payload) => ({ type: 'todos/Add', payload })
export const todoDeleted = (id) => ({ type: 'todos/Delete', payload: id })
export const todoToggle = (id) => ({ type: 'todos/Toggle', payload: id })
export const todoUpdate = (id, data) => ({ type: 'todos/Update', payload: { id, data } })
export const todoAllComplected = () => ({ type: 'todo/AllComplected' })
export const todoRemoveAllComplected = () => ({ type: 'todo/RemoveAllComplected' })

// get state
export const selectTasks = (state) => state.tasks.Tasks
export const selectIds = (state) => Object.keys(state.tasks.Tasks)
const selectTaskValues = (state) => Object.values(selectTasks(state))

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

export const countTask = createSelector(selectIds, (task) => task.length)