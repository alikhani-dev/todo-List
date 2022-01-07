import { Form } from 'react-bootstrap'
import { colors } from '../../Todo/todoSlice'
import Color from './Color'

const Colors = () => {
	return (
		<Form>
			{colors.map((color) => (
				<Color key={color[0]} color={color} />
			))}
		</Form>
	)
}

export default Colors
