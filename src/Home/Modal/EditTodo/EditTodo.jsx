import { useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import { colors, selectTaskByKey, todoUpdate } from '../../Todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'
import Toast from '../../Toast'

const EditTodo = ({ id, onHide, show }) => {
	const { header, description, color } = useSelector(selectTaskByKey(id))
	const [fields, setFields] = useState({ header, description, color })
	const [toast, setToast] = useState({ status: false, text: '' })
	const dispatch = useDispatch()

	const handelChange = ({ target }) => {
		setFields({ ...fields, [target.name]: target.value })
	}

	const updateTask = () => {
		onHide()
		setFields({ header: '', description: '' })
		if (fields.header.length !== 0 && fields.description.length !== 0) {
			dispatch(todoUpdate(id, fields))
			setToast({
				status: true,
				text: 'Success Update',
				color: 'primary',
			})
		} else {
			setToast({
				status: true,
				text: 'Please Enter all field',
				color: 'danger',
			})
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
				hide={() => setToast((prevState) => ({ ...prevState, status: false }))}
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
									<Form.Select value={fields.color} name='color' onChange={handelChange}>
										{option}
									</Form.Select>
								</Form.Group>
							</Col>
						</Row>
						<Form.Group className='my-3'>
							<Form.Label>Description</Form.Label>
							<Form.Control
								name='description'
								value={fields.description}
								onChange={handelChange}
								as='textarea'
								rows={3}
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
