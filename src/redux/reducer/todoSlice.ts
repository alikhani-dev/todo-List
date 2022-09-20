import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
// get State :
import { getColors, getStatus } from './filterSlice'
// types :
import { Color, RootState } from '..'
// utils :
import { setTasks } from './utils/localstorage'

export type InitStateTasks = { all: TaskWithKey }
export type TaskAdded = { id: string; completed: false } & Task
export type Task = { header: string; description: string; color: Color }
export type TaskWithKey = { [key: string]: { id: string; completed: boolean } & Task }

const initialState: InitStateTasks = { all: {} }

export const colors: { bg: Color; name: string }[] = [
	{ bg: 'info', name: 'blue' },
	{ bg: 'dark', name: 'black' },
	{ bg: 'danger', name: 'red' },
	{ bg: 'success', name: 'green' },
	{ bg: 'warning', name: 'orange' },
	{ bg: 'secondary', name: 'gray' },
	{ bg: 'primary', name: 'Blue Dress' },
]

// get state
export const selectTasks = (state: RootState) => state.tasks.all
export const selectIds = (state: RootState) => Object.keys(state.tasks.all)
export const selectTaskByKey = (key: string) => (state: RootState) => state.tasks.all[key]
const selectTaskValues = (state: RootState) => Object.values(selectTasks(state))

export const countTask = createSelector(selectIds, task => task.length)
export const filterTasks = createSelector(getColors, getStatus, selectTaskValues, (colors, status, tasks) => {
	let newTask = []

	if (status === 'All') newTask = tasks
	else newTask = tasks.filter(task => task.completed === (status === 'Pending'))

	if (colors.length) newTask = newTask.filter(task => colors.includes(task.color))

	return newTask.map(item => item.id)
})

const reducer = createSlice({
	name: 'task',
	initialState,
	reducers: {
		taskToggle(state, action: PayloadAction<string>) {
			const id = action.payload
			state.all[id].completed = !state.all[id].completed
			setTasks(state.all)
		},
		taskDeleted(state, action: PayloadAction<string>) {
			const id = action.payload
			delete state.all[id]
			setTasks(state.all)
		},
		taskAllComplected(state) {
			Object.values(state.all).forEach(task => (task.completed = true))
			setTasks(state.all)
		},
		taskRemoveAllComplected(state) {
			Object.values(state.all).forEach(({ completed, id }) => {
				if (completed) delete state.all[id]
			})
			setTasks(state.all)
		},
		taskUpdate: {
			reducer(state, action: PayloadAction<{ id: string; data: Task }>) {
				const { id, data } = action.payload
				state.all[id] = { ...state.all[id], ...data }
				setTasks(state.all)
			},
			prepare: (id: string, data: { header: string; description: string; color: Color }) => ({ payload: { id, data } }),
		},
		taskAdded: {
			reducer(state, action: PayloadAction<TaskAdded>) {
				const task = action.payload
				state.all[task.id] = task
				setTasks(state.all)
			},
			prepare: task => ({ payload: { ...task, id: nanoid(5), completed: false } }),
		},
	},
})

export const { taskToggle, taskDeleted, taskAllComplected, taskRemoveAllComplected, taskUpdate, taskAdded } =
	reducer.actions
export default reducer.reducer
