// redux :
import { countTask, filterTasks } from '../redux/reducer/todoSlice'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '../redux'
// UI
import { Col, Container, Row } from 'react-bootstrap'
// components :
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import Todo from '../components/Todo/Todo'

const Home = () => {
	const tasks = useAppSelector(filterTasks, shallowEqual)
	const count = useAppSelector(countTask)
	const title = count ? `Remaining Tasks : ${count}` : 'All complected'

	return (
		<>
			<Header />
			<Container className='mt-4'>
				<main>
					<h3 className='mb-4'>{title}</h3>
					<Row>
						<Col className='mb-4 mb-md-0' xs={12} sm={5} md={4} lg={3} xl={2}>
							<Filter />
						</Col>
						<Col xs={12} sm={7} md={8} lg={9} xl={10}>
							<Row>
								{tasks.map(id => (
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
