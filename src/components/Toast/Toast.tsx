import React, { FC } from 'react'
import { Toast, ToastContainer, CloseButton } from 'react-bootstrap'
import { Color } from '../../redux'
import styles from './style.module.scss'

export type Props = { show: boolean; text: string; hide: () => void; color: Color }

const ToastCm: FC<Props> = ({ show, hide, text, color }) => (
	<ToastContainer className={styles.wrapper}>
		<Toast
			autohide
			show={show}
			delay={3000}
			onClose={hide}
			className={`align-items-center text-white bg-${color} border-0 rounded-3`}
		>
			<div className='d-flex'>
				<Toast.Body>{text}</Toast.Body>
				<CloseButton className='me-2 m-auto' onClick={hide} />
			</div>
		</Toast>
	</ToastContainer>
)

export default ToastCm
