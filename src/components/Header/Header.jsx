import { useState } from 'react'
import { Button } from 'react-bootstrap'
import AddTodo from '../Modal/AddTodo'
import styles from './style.module.css'

const Header = () => {
	const [modalShow, setModalShow] = useState(false)
	const handelModal = () => setModalShow((prev) => !prev)

	return (
		<div className={`text-center  py-5 ${styles.wrapper}`}>
			<h2 className='pb-4'>TODO List</h2>
			<Button variant='primary' onClick={handelModal}>
				Create Task
			</Button>
			<AddTodo show={modalShow} onHide={handelModal} />
		</div>
	)
}

export default Header
