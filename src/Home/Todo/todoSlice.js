import { v4 as uuidv4 } from 'uuid'

const initialState = {
	Tasks: {
		1: { id: 1, header: '1', description: 'Deign ui', completed: true, color: 'secondary' },
		2: { id: 2, header: '2', description: 'discover state', completed: false, color: 'dark' },
		3: { id: 3, header: '3', description: 'discover actions', completed: false, color: 'primary' },
		4: { id: 4, header: '4', description: 'implement reducer', completed: false, color: 'info' },
		5: { id: 5, header: '5', description: 'Complete patterns', completed: false, color: 'success' },
		6: { id: 6, header: '5', description: 'Complete patterns', completed: false, color: 'danger' },
		7: { id: 7, header: '5', description: 'Complete patterns', completed: false, color: 'warning' },
		8: { id: 8, header: '5', description: 'Complete patterns', completed: false },
	},
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'todos/Add': {
			const todo = action.payload
			return { ...state, Tasks: { ...state.Tasks, [todo.id]: { ...todo, id: uuidv4(), completed: false } } }
		}

		case 'todos/Delete': {
			const id = action.payload
			const tasks = { ...state.Tasks }
			delete tasks[id]
			return { ...state, Tasks: { ...tasks } }
		}

		case 'todos/Toggle': {
			const id = action.payload
			const todo = state.Tasks[id]
			return {
				...state,
				Tasks: { ...state.Tasks, [id]: { ...todo, completed: !todo.completed } },
			}
		}

		case 'todos/Update':
			return

		default:
			return state
	}
}
export default reducer

export const selectTasks = (state) => state.tasks.Tasks
export const selectIds = (state) => Object.keys(state.tasks.Tasks)

// actions
export const todoAdded = (payload) => ({ type: 'todos/Add', payload })
export const todoDeleted = (id) => ({ type: 'todos/Delete', payload: id })
export const todoToggle = (id) => ({ type: 'todos/Toggle', payload: id })

// export const todoUpdate = (id) => ({ type: 'todos/Update', id })
