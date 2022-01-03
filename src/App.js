import { Container, Row } from 'react-bootstrap'
import Todo from './Components/TodoList/Todo'
import { Header, Main } from './Layout'

const App = () => {
	return (
		<>
			<Header />
			<Container className='mt-5'>
				<Main>
					<h3 className='mb-4'>All Task</h3>
					<Row>
						<Todo />
						<Todo />
						<Todo />
						<Todo />
						<Todo />
					</Row>
				</Main>
			</Container>
		</>
	)
}

export default App
