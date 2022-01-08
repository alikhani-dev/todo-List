import { v4 as uuidv4 } from 'uuid'
import produce from 'immer'
import { getColors, getStatus } from '../Filter/filterSlice'

export const colors = [
	['secondary', 'gray'],
	['dark', 'black'],
	['primary', 'Blue Dress'],
	['info', 'blue'],
	['success', 'green'],
	['danger', 'red'],
	['warning', 'orange'],
]

const initialState = {
	Tasks: {
		1: { id: 1, header: '1', description: 'Deign ui', completed: true, color: 'secondary' },
		2: { id: 2, header: '2', description: 'discover state ds', completed: false, color: 'dark' },
		3: { id: 3, header: '3', description: 'discover actions', completed: false, color: 'primary' },
		4: { id: 4, header: '4', description: 'implement reducer', completed: false, color: 'info' },
		5: { id: 5, header: '5', description: 'Complete patterns', completed: false, color: 'success' },
		6: { id: 6, header: '5', description: 'Complete patterns', completed: false, color: 'danger' },
		7: { id: 7, header: '5', description: 'Complete patterns', completed: false, color: 'warning' },
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
			const payload = action.payload
			state.Tasks[payload.id] = payload
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
export const todoUpdate = (payload) => ({ type: 'todo/Update', payload })
export const todoAllComplected = () => ({ type: 'todo/AllComplected' })
export const todoRemoveAllComplected = () => ({ type: 'todo/RemoveAllComplected' })

// get state
export const selectTasks = (state) => state.tasks.Tasks
export const selectIds = (state) => Object.keys(state.tasks.Tasks)
export const filterTodos = (state) => {
	const colors = getColors(state)
	const status = getStatus(state)
	const todos = Object.values(selectTasks(state))
	let newTodo = []

	if (status === 'All') {
		newTodo = todos
	} else {
		newTodo = todos.filter((todo) => {
			const bool = status === 'Pending' ? false : true
			return todo.completed === bool
		})
	}

	if (colors.length !== 0) {
		newTodo = newTodo.filter((todo) => colors.includes(todo.color))
	}

	return newTodo.map((item) => item.id)
}
