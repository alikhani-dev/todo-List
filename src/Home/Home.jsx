import { Container, Row } from 'react-bootstrap'
import Todo from './Todo'
import Header from './Header'
import { shallowEqual, useSelector } from 'react-redux'
import { selectIds } from './Todo/todoSlice'

const Home = () => {
	const tasks = useSelector(selectIds, shallowEqual)

	return (
		<>
			<Header />
			<Container className='mt-5'>
				<main>
					<h3 className='mb-4'>All Task</h3>
					<Row>
						{tasks.map((id) => (
							<Todo key={id} id={id} />
						))}
					</Row>
				</main>
			</Container>
		</>
	)
}

export default Home
