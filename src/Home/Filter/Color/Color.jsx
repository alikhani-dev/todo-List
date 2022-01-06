import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeColor } from '../filterSlice'
const Color = ({ color }) => {
	const dispatch = useDispatch()

	return (
		<div className='mb-3'>
			<Form.Check onClick={() => dispatch(changeColor(color))} type='checkbox' id={color} label={color} />
		</div>
	)
}

export default Color
