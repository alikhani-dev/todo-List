import { FC } from 'react'
// UI :
import { Accordion } from 'react-bootstrap'
// components :
import Actions from './Actions'
import Status from './Status/Status'
import Color from './Colors/Colors'

const Filter: FC = () => (
	<>
		<Accordion>
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
		<Actions />
	</>
)

export default Filter
