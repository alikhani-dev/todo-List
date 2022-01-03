import { Card, Col } from 'react-bootstrap'
import { FiEdit, FiTrash } from 'react-icons/fi'
import styles from './style.module.css'

const Todo = ({ title, text }) => {
	return (
		<Col xs={12} sm={6} md={4} lg={3}>
			<Card className='mb-5 border-top border-5 rounded-0 border-0 shadow '>
				<Card.Header className={`position-relative border rounded-3 p-1 px-2 ${styles.header}`}>Header</Card.Header>
				<Card.Body className='mt-3'>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{text} </Card.Text>
				</Card.Body>
				<Card.Footer className='text-end border-0 bg-transparent'>
					<FiEdit className={`p-1 me-1 ${styles.icon}`} size={30} />
					<FiTrash className={`p-1 ${styles.icon}`} size={30} />
				</Card.Footer>
			</Card>
		</Col>
	)
}

export default Todo
