import { FiEdit, FiTrash, FiCheckCircle, FiCircle } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { todoDeleted, todoToggle } from './todoSlice'

const Actions = ({ id, completed, handelModal }) => {
	const dispatch = useDispatch()

	return (
		<>
			{completed ? (
				<FiCheckCircle onClick={() => dispatch(todoToggle(id))} className='p-1' />
			) : (
				<FiCircle onClick={() => dispatch(todoToggle(id))} className='p-1' />
			)}
			<FiEdit onClick={handelModal} className='p-1' />
			<FiTrash onClick={() => dispatch(todoDeleted(id))} className='p-1' />
		</>
	)
}

export default Actions
