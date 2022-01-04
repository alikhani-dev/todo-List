import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Modal from '../Modal'
import styles from './style.module.css'
import { todoAdded } from '../Todo/todoSlice'

const Header = () => {
	const dispatch = useDispatch()
	const [modalShow, setModalShow] = useState(false)
	const [fields, setFields] = useState({
		header: '',
		description: '',
	})

	const handelChange = ({ target }) => {
		setFields({ ...fields, [target.name]: target.value })
	}

	const saveTask = () => {
		dispatch(todoAdded(fields))
		setFields({
			header: '',
			description: '',
		})
		setModalShow(false)
	}

	return (
		<div className={`text-center  py-5 ${styles.wrapper}`}>
			<h2 className='pb-4'>TODO List</h2>
			<Button variant='primary' onClick={() => setModalShow(true)}>
				Create Task
			</Button>
			<Modal
				show={modalShow}
				onHide={() => setModalShow(false)}
				header='Create Task'
				footer={
					<>
						<Button variant='primary' onClick={saveTask}>
							Crete Task
						</Button>
						<Button variant='secondary' onClick={() => setModalShow(false)}>
							cancel
						</Button>
					</>
				}
			>
				<Form>
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
			</Modal>
		</div>
	)
}

export default Header
