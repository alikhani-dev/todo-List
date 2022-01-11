import { Card, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { EditTodo } from '../Modal'
import { useState } from 'react'
import styles from './style.module.css'
import Actions from './Actions'

const Todo = ({ id: key }) => {
	const { header, description, completed, id, color } = useSelector((state) => state.tasks.Tasks[key])
	const [modalShow, setModalShow] = useState(false)
	const handelModal = () => setModalShow((prev) => !prev)

	return (
		<>
			{modalShow && <EditTodo show={modalShow} onHide={handelModal} id={id} />}
			<Col xs={12} md={6} lg={4} xl={3}>
				<Card className={`mb-5 border-top border-5 rounded-0 border-0 ${color && `border-${color}`} shadow `}>
					<Card.Header className={`position-relative border rounded-3 p-1 px-2 ${styles.header}`}>{header}</Card.Header>
					<Card.Body className={`mt-3 ${styles.TODO}`}>
						<Card.Text>{description} </Card.Text>
					</Card.Body>
					<Card.Footer className={`text-end border-0 bg-transparent ${styles.footer}`}>
						<Actions id={id} completed={completed} handelModal={handelModal} />
					</Card.Footer>
				</Card>
			</Col>
		</>
	)
}

export default Todo
