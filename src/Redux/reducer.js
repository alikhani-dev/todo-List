import { combineReducers } from 'redux'
import tasksReducer from '../Home/Todo/todoSlice'
import filterReducer from '../Home/Filter/filterSlice'

const rootReducer = combineReducers({
	tasks: tasksReducer,
	filter: filterReducer,
})

export default rootReducer
