import { useState, FC, ChangeEvent } from 'react'
// UI
import { Col, Modal, Row, Button, Form } from 'react-bootstrap'
// components :
import Toast from '../Toast/Toast'
// redux & types :
import { colors, selectTaskByKey, taskUpdate } from '../../redux/reducer/todoSlice'
import { Color, useAppDispatch, useAppSelector } from '../../redux'

type Props = { id: string; onHide: () => void; show: boolean }
type ToastState = { status: boolean; text: string; color: Color }

const EditTodo: FC<Props> = ({ id, onHide, show }) => {
	const { header, description, color } = useAppSelector(selectTaskByKey(id))
	const [fields, setFields] = useState({ header, description, color })
	const [toast, setToast] = useState<ToastState>({ status: false, text: '', color: 'secondary' })
	const dispatch = useAppDispatch()

	const handelChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [target.name]: target.value })
	}

	const updateTask = () => {
		onHide()
		setFields({ header: '', description: '', color: 'secondary' })
		if (!!fields.header.length && !!fields.description.length) {
			dispatch(taskUpdate(id, fields))
			setToast({ status: true, text: 'Success Update', color: 'primary' })
		} else {
			setToast({ status: true, text: 'Please Enter all field', color: 'danger' })
		}
	}

	const option = colors.map(({ bg, name }) => (
		<option key={bg} value={bg}>
			{name}
		</option>
	))

	return (
		<>
			<Toast
				color={toast.color}
				text={toast.text}
				show={toast.status}
				hide={() => setToast(prevState => ({ ...prevState, status: false }))}
			/>
			<Modal onHide={onHide} show={show} aria-labelledby='contained-modal-title-vcenter' centered>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>Create Task</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row>
							<Col xs={8}>
								<Form.Group>
									<Form.Label>Header</Form.Label>
									<Form.Control
										name='header'
										value={fields.header}
										onChange={handelChange}
										type='text'
										placeholder='Enter Header ...'
									/>
								</Form.Group>
							</Col>
							<Col xs={4}>
								<Form.Group>
									<Form.Label>Color</Form.Label>
									{/* @ts-ignore */}
									<Form.Select value={fields.color} name='color' onChange={handelChange}>
										{option}
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
						<Form.Group className='my-3'>
							<Form.Label>Description</Form.Label>
							<Form.Control
								rows={3}
								as='textarea'
								name='description'
								onChange={handelChange}
								value={fields.description}
								placeholder='Enter Description ...'
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' onClick={updateTask}>
						Update Task
					</Button>
					<Button variant='secondary' onClick={onHide}>
						cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default EditTodo
