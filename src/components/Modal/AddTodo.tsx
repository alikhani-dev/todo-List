import React, { useState, FC, ChangeEvent } from 'react'
import { colors, taskAdded } from '../../redux/reducer/todoSlice'
// components :
import Toast from '../Toast/Toast'
// styles & UI :
import { Col, Modal, Row } from 'react-bootstrap'
import { Button, Form } from 'react-bootstrap'
import { Color, useAppDispatch } from '../../redux'

type ToastState = { text: string; status: boolean; color: Color }
type FieldsState = { header: string; description: string; color: Color }

export type AddModalProps = { onHide: () => void; show: boolean }

const AddTodo: FC<AddModalProps> = ({ onHide, show }) => {
	const [fields, setFields] = useState<FieldsState>({ header: '', description: '', color: 'secondary' })
	const [toast, setToast] = useState<ToastState>({ status: false, text: '', color: 'secondary' })
	const dispatch = useAppDispatch()

	const handelChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setFields({ ...fields, [target.name]: target.value })
	}

	const saveTask = () => {
		const { header, description } = fields
		if (header.length !== 0 && description.length !== 0) {
			dispatch(taskAdded(fields))
			setFields({ header: '', description: '', color: 'secondary' })
			onHide()
			setToast({ status: true, text: 'Success', color: 'primary' })
		} else {
			onHide()
			setToast({ status: true, text: 'Please Enter all field', color: 'danger' })
		}
	}

	const option = colors.map(({ name, bg }) => (
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
									<Form.Select value={fields.color} name='color' onSelect={e => console.log(e)} onChange={handelChange}>
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
					<Button variant='primary' onClick={saveTask}>
						Crete Task
					</Button>
					<Button variant='secondary' onClick={onHide}>
						cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default AddTodo
