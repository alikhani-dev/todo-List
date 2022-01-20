import todoSlice from '../Home/Todo/todoSlice'
import filterSlice from '../Home/Filter/filterSlice'

const rootReducer = {
	todos: todoSlice,
	filter: filterSlice,
}

export default rootReducer
