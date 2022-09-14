import { FC } from 'react'
// UI :
import { Button } from 'react-bootstrap'
// redux :
import { useAppDispatch } from '../../redux'
import { taskAllComplected, taskRemoveAllComplected } from '../../redux/reducer/todoSlice'

const Actions: FC = () => {
	const dispatch = useAppDispatch()

	return (
		<>
			<Button className='mt-3' onClick={() => dispatch(taskRemoveAllComplected())}>
				Remove All Complected
			</Button>
			<Button className='mt-3 ms-3 ms-sm-0' onClick={() => dispatch(taskAllComplected())}>
				All Complected
			</Button>
		</>
	)
}

export default Actions
