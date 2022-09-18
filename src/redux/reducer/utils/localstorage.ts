import { TaskWithKey } from '../todoSlice'

export const getAllTask = (): TaskWithKey => {
	const response = localStorage.getItem('tasks')
	return response
		? JSON.parse(response)
		: { '0': { id: '0', header: 'example', description: 'some text ...', completed: true, color: 'primary' } }
}

export const setTasks = (response: TaskWithKey) => localStorage.setItem('tasks', JSON.stringify(response))
