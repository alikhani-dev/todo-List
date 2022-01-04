import { combineReducers } from 'redux'
import tasksReducer from '../Home/Todo/todoSlice'

const rootReducer = combineReducers({
	tasks: tasksReducer,
})

export default rootReducer
