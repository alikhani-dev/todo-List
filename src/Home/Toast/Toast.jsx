import { Toast, ToastContainer, CloseButton } from 'react-bootstrap'
import styles from './style.module.css'

const ToastCm = ({ show, hide }) => {
	return (
		<ToastContainer className={styles.wrapper}>
			<Toast
				onClose={hide}
				show={show}
				delay={3000}
				autohide
				className='align-items-center text-white bg-primary border-0 rounded-3'
			>
				<div className='d-flex'>
					<Toast.Body>success</Toast.Body>
					<CloseButton className='me-2 m-auto' onClick={hide} />
				</div>
			</Toast>
		</ToastContainer>
	)
}

export default ToastCm
