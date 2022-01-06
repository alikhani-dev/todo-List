import { Col, Container, Row } from 'react-bootstrap'
import { shallowEqual, useSelector } from 'react-redux'
import { filterTodos } from './Todo/todoSlice'
import Header from './Header'
import Filter from './Filter'
import Todo from './Todo'

const Home = () => {
	const tasks = useSelector(filterTodos, shallowEqual)

	return (
		<>
			<Header />
			<Container className='mt-4'>
				<main>
					<h3 className='mb-4'>All Task</h3>
					<Row>
						<Col className='mb-4 mb-md-0' xs={12} sm={5} md={4} lg={3} xl={2}>
							<Filter />
						</Col>
						<Col xs={12} sm={7} md={8} lg={9} xl={10}>
							<Row>
								{tasks.map((id) => (
									<Todo key={id} id={id} />
								))}
							</Row>
						</Col>
					</Row>
				</main>
			</Container>
		</>
	)
}

export default Home
