import { Accordion } from 'react-bootstrap'
import Color from './Color'
import Status from './Status'

const Filter = () => {
	return (
		<>
			<Accordion defaultActiveKey={0}>
				<Accordion.Item eventKey='0'>
					<Accordion.Header>Filter by Color</Accordion.Header>
					<Accordion.Body>
						<Color />
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey='1'>
					<Accordion.Header>Filter by status</Accordion.Header>
					<Accordion.Body>
						<Status />
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	)
}

export default Filter
