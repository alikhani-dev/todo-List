import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { taskAllComplected, taskRemoveAllComplected } from '../../redux/reducer/todoSlice'
// UI :
import { Button } from 'react-bootstrap'

const Actions: FC = () => {
	const dispatch = useDispatch()

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
