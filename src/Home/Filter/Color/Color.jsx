import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeColor } from '../filterSlice'
import style from './style.module.css'
const Color = ({ color: [key, color] }) => {
	const dispatch = useDispatch()

	return (
		<div className={`mb-3 ${style.wrapper}`}>
			<Form.Check onClick={() => dispatch(changeColor(key))} type='checkbox' id={key} label={color} />
		</div>
	)
}

export default Color
