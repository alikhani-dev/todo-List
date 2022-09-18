import { Task, TaskAdded, TaskWithKey } from '../todoSlice'

export const getAllTask = (): TaskWithKey => {
	const response = localStorage.getItem('tasks')
	return response
		? JSON.parse(response)
		: { '0': { id: '0', header: 'example', description: 'some text ...', completed: true, color: 'primary' } }
}

export const addedSync = (task: TaskAdded) => {
	const response = getAllTask()
	response[task.id] = task
	localStorage.setItem('tasks', JSON.stringify(response))
}

export const deletedSync = (id: string) => {
	const response = getAllTask()
	delete response[id]
	localStorage.setItem('tasks', JSON.stringify(response))
}

export const allComplectedSync = () => {
	const response = getAllTask()
	Object.values(response).forEach(todo => (todo.completed = true))
	localStorage.setItem('tasks', JSON.stringify(response))
}

export const removeAllComplectedSync = () => {
	const response = getAllTask()
	Object.values(response).forEach(({ completed, id }) => {
		if (completed) delete response[id]
	})
}

export const toggleSync = (id: string) => {
	const response = getAllTask()
	response[id].completed = !response[id].completed
	localStorage.setItem('tasks', JSON.stringify(response))
}

export const updateSync = (id: string, data: Task) => {
	const response = getAllTask()
	response[id] = { ...response[id], ...data }
	localStorage.setItem('tasks', JSON.stringify(response))
}
