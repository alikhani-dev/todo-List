import { useDispatch } from 'react-redux'
import { todoAllComplected, todoRemoveAllComplected } from '../Todo/todoSlice'
import { Button } from 'react-bootstrap'

const Actions = () => {
	const dispatch = useDispatch()

	return (
		<>
			<Button className='mt-3' onClick={() => dispatch(todoRemoveAllComplected())}>
				Remove All Complected
			</Button>
			<Button className='mt-3 ms-3 ms-sm-0' onClick={() => dispatch(todoAllComplected())}>
				All Complected
			</Button>
		</>
	)
}

export default Actions
