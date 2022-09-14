import { FC } from 'react'
import { FiEdit, FiTrash, FiCheckCircle, FiCircle } from 'react-icons/fi'
// redux :
import { useAppDispatch } from '../../redux'
import { taskDeleted, taskToggle } from '../../redux/reducer/todoSlice'

type Props = { id: string; completed: boolean; handelModal: () => void }

const Actions: FC<Props> = ({ id, completed, handelModal }) => {
	const dispatch = useAppDispatch()

	return (
		<>
			{completed ? (
				<FiCheckCircle onClick={() => dispatch(taskToggle(id))} className='p-1' />
			) : (
				<FiCircle onClick={() => dispatch(taskToggle(id))} className='p-1' />
			)}
			<FiEdit onClick={handelModal} className='p-1' />
			<FiTrash onClick={() => dispatch(taskDeleted(id))} className='p-1' />
		</>
	)
}

export default Actions
