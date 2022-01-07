import { useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import { colors, todoAdded } from '../Todo/todoSlice'
import { useDispatch } from 'react-redux'

const ModalCom = ({ onHide, show, showToast }) => {
	const [fields, setFields] = useState({ header: '', description: '', color: 'secondary' })
	const dispatch = useDispatch()

	const handelChange = ({ target }) => {
		setFields({ ...fields, [target.name]: target.value })
	}

	const saveTask = () => {
		dispatch(todoAdded(fields))
		setFields({ header: '', description: '' })
		onHide()
		showToast()
	}

	const option = colors.map(([key, color]) => (
		<option key={key} value={key}>
			{color}
		</option>
	))

	return (
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
				<Button variant='primary' onClick={saveTask}>
					Crete Task
				</Button>
				<Button variant='secondary' onClick={onHide}>
					cancel
				</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ModalCom
