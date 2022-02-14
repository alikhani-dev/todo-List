import { Form } from 'react-bootstrap'
import { colors } from '../../Todo/todoSlice'
import Color from './Color'

const Colors = () => {
	return (
		<Form>
			{colors.map(({ bg, name }) => (
				<Color key={name} color={bg} />
			))}
		</Form>
	)
}

export default Colors
