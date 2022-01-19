import taskSlice from '../Home/Todo/todoSlice'
import filterSlice from '../Home/Filter/filterSlice'

const rootReducer = {
	tasks: taskSlice,
	filter: filterSlice,
}

export default rootReducer
