import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from '../Modal'
import ToastCm from '../Toast'
import styles from './style.module.css'

const Header = () => {
	const [modalShow, setModalShow] = useState(false)
	const [toastShow, setToast] = useState(false)
	return (
		<div className={`text-center  py-5 ${styles.wrapper}`}>
			<h2 className='pb-4'>TODO List</h2>
			<Button variant='primary' onClick={() => setModalShow(true)}>
				Create Task
			</Button>
			<Modal show={modalShow} onHide={() => setModalShow(false)} showToast={() => setToast(true)} />
			<ToastCm show={toastShow} hide={() => setToast(false)} />
		</div>
	)
}

export default Header
