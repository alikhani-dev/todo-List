import React, { FC } from 'react'
import { taskAllComplected, taskRemoveAllComplected } from '../../redux/reducer/todoSlice'
// UI :
import { Button } from 'react-bootstrap'
import { useAppDispatch } from '../../redux'

const Actions: FC = () => {
	const dispatch = useAppDispatch()

	return (
		<>
			<Button className='mt-3' onClick={() => dispatch(taskRemoveAllComplected)}>
				Remove All Complected
			</Button>
			<Button className='mt-3 ms-3 ms-sm-0' onClick={() => dispatch(taskAllComplected)}>
				All Complected
			</Button>
		</>
	)
}

export default Actions
