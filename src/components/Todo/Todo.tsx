import { FC, useState } from 'react'
// styles & UI
import { Card, Col } from 'react-bootstrap'
import styles from './style.module.scss'
// components :
import Actions from './Actions'
import EditTodo from '../Modal/EditTodo'
// redux :
import { selectTaskByKey } from '../../redux/reducer/todoSlice'
import { useAppSelector } from '../../redux'

type Props = { id: string }

const Todo: FC<Props> = ({ id: key }) => {
	const { header, description, completed, id, color } = useAppSelector(selectTaskByKey(key))
	const [isOpen, setIsOpen] = useState(false)
	const handelModal = () => setIsOpen(prev => !prev)

	return (
		<>
			{isOpen && <EditTodo show={isOpen} onHide={handelModal} id={id} />}
			<Col xs={12} md={6} lg={4} xl={3}>
				<Card className={`mb-5 border-top border-5 rounded-0 border-0 border-${color} shadow`}>
					<Card.Header
						className={`position-relative border border-1 border-${color} rounded-3 p-1 px-2 ${styles.header}`}
					>
						{header}
					</Card.Header>
					<Card.Body className={`mt-3 ${styles.TODO}`}>
						<Card.Text>{description}</Card.Text>
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
