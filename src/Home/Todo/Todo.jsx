import { Card, Col } from 'react-bootstrap'
import { FiEdit, FiTrash, FiCheckCircle, FiCircle } from 'react-icons/fi'
import { useSelector, useDispatch } from 'react-redux'
import styles from './style.module.css'
import { todoDeleted, todoToggle } from './todoSlice'

const Todo = ({ id: key }) => {
	const { header, description, completed, id, color } = useSelector((state) => state.tasks.Tasks[key])
	const dispatch = useDispatch()

	return (
		<Col xs={12} sm={6} md={4} lg={3}>
			<Card className={`mb-5 border-top border-5 rounded-0 border-0 ${color && `border-${color}`} shadow `}>
				<Card.Header className={`position-relative border rounded-3 p-1 px-2 ${styles.header}`}>{header}</Card.Header>
				<Card.Body className='mt-3'>
					<Card.Text>{description} </Card.Text>
				</Card.Body>
				<Card.Footer className='text-end border-0 bg-transparent'>
					{completed ? (
						<FiCheckCircle onClick={() => dispatch(todoToggle(id))} className={`p-1 ${styles.icon}`} size={30} />
					) : (
						<FiCircle onClick={() => dispatch(todoToggle(id))} className={`p-1 ${styles.icon}`} size={30} />
					)}
					<FiEdit className={`p-1 me-1 ${styles.icon}`} size={30} />
					<FiTrash onClick={() => dispatch(todoDeleted(id))} className={`p-1 ${styles.icon}`} size={30} />
				</Card.Footer>
			</Card>
		</Col>
	)
}

export default Todo
