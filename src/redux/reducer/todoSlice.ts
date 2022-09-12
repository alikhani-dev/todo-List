import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
// get State :
import { getColors, getStatus } from './filterSlice'
// types :
import { Color, RootState } from '..'

export type InitStateTasks = {
	Tasks: { [key: string]: { id: string; header: string; description: string; completed: boolean; color: Color } }
}

const initialState: InitStateTasks = {
	Tasks: { '0': { id: '0', header: 'example', description: 'some text ...', completed: true, color: 'primary' } }
}

export const colors: { bg: Color; name: string }[] = [
	{ bg: 'info', name: 'blue' },
	{ bg: 'dark', name: 'black' },
	{ bg: 'danger', name: 'red' },
	{ bg: 'success', name: 'green' },
	{ bg: 'warning', name: 'orange' },
	{ bg: 'secondary', name: 'gray' },
	{ bg: 'primary', name: 'Blue Dress' }
]

// get state
export const selectTasks = (state: RootState) => state.tasks.Tasks
export const selectIds = (state: RootState) => Object.keys(state.tasks.Tasks)
export const selectTaskByKey = (key: string) => (state: RootState) => state.tasks.Tasks[key]
const selectTaskValues = (state: RootState) => Object.values(selectTasks(state))

export const countTask = createSelector(selectIds, task => task.length)
export const filterTasks = createSelector(getColors, getStatus, selectTaskValues, (colors, status, tasks) => {
	let newTask = []

	if (status === 'All') newTask = tasks
	else
		newTask = tasks.filter(task => {
			const bool = status === 'Pending' ? false : true
			return task.completed === bool
		})

	if (colors.length) newTask = newTask.filter(todo => colors.includes(todo.color))

	return newTask.map(item => item.id)
})

const reducer = createSlice({
	name: 'task',
	initialState,
	reducers: {
		taskToggle(state, action: PayloadAction<string>) {
			const id = action.payload
			state.Tasks[id].completed = !state.Tasks[id].completed
		},
		taskDeleted(state, action: PayloadAction<string>) {
			const id = action.payload
			delete state.Tasks[id]
		},
		taskAllComplected(state) {
			Object.values(state.Tasks).forEach(todo => (todo.completed = true))
		},
		taskRemoveAllComplected(state) {
			Object.values(state.Tasks).forEach(({ completed, id }) => {
				if (completed) delete state.Tasks[id]
			})
		},
		taskUpdate: {
			reducer(state, action: PayloadAction<{ id: string; data: TaskAdded }>) {
				const { id, data } = action.payload
				state.Tasks[id] = { ...state.Tasks[id], ...data }
			},
			prepare(id: string, data: { header: string; description: string; color: Color }) {
				return { payload: { id, data } }
			}
		},
		taskAdded: {
			reducer(state, action: PayloadAction<{ id: string; completed: false } & TaskAdded>) {
				const todo = action.payload
				state.Tasks[todo.id] = todo
			},
			prepare(todo) {
				return { payload: { ...todo, id: nanoid(5), completed: false } }
			}
		}
	}
})

type TaskAdded = { header: string; description: string; color: Color }
export const { taskToggle, taskDeleted, taskAllComplected, taskRemoveAllComplected, taskUpdate, taskAdded } =
	reducer.actions
export default reducer.reducer
