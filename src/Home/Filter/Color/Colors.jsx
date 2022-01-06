import { Form } from 'react-bootstrap'
import Color from './Color'

const Colors = () => {
	const colors = ['secondary', 'dark', 'primary', 'info', 'success', 'danger', 'warning']
	return (
		<Form>
			{colors.map((color) => (
				<Color key={color} color={color} />
			))}
		</Form>
	)
}

export default Colors
