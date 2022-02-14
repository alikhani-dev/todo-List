import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { changeColor } from '../filterSlice'
import style from './style.module.css'

const Color = ({ color }) => {
	const dispatch = useDispatch()

	return (
		<div className={`mb-3 ${style.wrapper}`}>
			<Form.Check
				onClick={() => dispatch(changeColor(color))}
				type='checkbox'
				id={color}
				label={<span className={`${style.label} bg-${color}`}>{color}</span>}
			/>
		</div>
	)
}

export default Color
