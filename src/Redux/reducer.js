import todoSlice from '../components/Todo/todoSlice'
import filterSlice from '../components/Filter/filterSlice'

const rootReducer = {
	todos: todoSlice,
	filter: filterSlice,
}

export default rootReducer
