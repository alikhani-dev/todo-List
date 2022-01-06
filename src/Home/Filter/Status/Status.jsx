import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatus, getStatus } from '../filterSlice'

const Status = () => {
	const status = ['All', 'Complected', 'Pending']
	const dispatch = useDispatch()
	const checked = useSelector(getStatus)

    return (
		<>
			{status.map((item) => (
				<Form.Check
					onChange={() => dispatch(changeStatus(item))}
					checked={checked === item}
					key={item}
					id={item}
					type='radio'
					name='status'
					label={item}
				/>
			))}
		</>
	)
}

export default Status
