import { FC } from 'react'
// redux :
import { useAppDispatch, useAppSelector } from '../../../redux'
import { changeStatus, getStatus, getActionsValue } from '../../../redux/reducer/filterSlice'
// UI :
import { Form } from 'react-bootstrap'

const Status: FC = () => {
	const dispatch = useAppDispatch()
	const checked = useAppSelector(getStatus)

	return (
		<>
			{getActionsValue.map(item => (
				<Form.Check
					id={item}
					key={item}
					type='radio'
					name='status'
					label={item}
					checked={checked === item}
					onChange={() => dispatch(changeStatus(item))}
				/>
			))}
		</>
	)
}

export default Status
