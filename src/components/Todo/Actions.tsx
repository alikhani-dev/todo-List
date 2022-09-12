import React, { FC } from 'react'
import { FiEdit, FiTrash, FiCheckCircle, FiCircle } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { taskDeleted, taskToggle } from '../../redux/reducer/todoSlice'

type Props = { id: string; completed: boolean; handelModal: () => void }

const Actions: FC<Props> = ({ id, completed, handelModal }) => {
	const dispatch = useDispatch()

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
