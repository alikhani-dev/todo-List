import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Modal } from '../../Components'
import styles from './style.module.css'

const Header = () => {
	const [modalShow, setModalShow] = useState(false)
	const [fields, setFields] = useState({
		title: '',
		description: '',
	})

	const handelChange = ({ target }) => {
		setFields({ ...fields, [target.name]: target.value })
	}

	const saveTask = () => {

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
						<Form.Label>Title</Form.Label>
						<Form.Control
							name='title'
							value={fields.title}
							onChange={handelChange}
							type='text'
							placeholder='Enter title ...'
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
