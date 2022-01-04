import { Modal } from 'react-bootstrap'

const ModalCom = ({ header, children, footer, ...props }) => {
	return (
		<Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>{header}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{children}</Modal.Body>
			<Modal.Footer>{footer}</Modal.Footer>
		</Modal>
	)
}

export default ModalCom
