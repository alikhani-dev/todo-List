import { FC } from 'react'
// redux & types :
import { Color, useAppDispatch } from '../../../redux'
import { changeColor } from '../../../redux/reducer/filterSlice'
import { colors } from '../../../redux/reducer/todoSlice'
// styles & UI :
import { Form } from 'react-bootstrap'
import style from './style.module.scss'

type Props = { color: Color }

const ColorFC: FC<Props> = ({ color }) => {
	const dispatch = useAppDispatch()
	return (
		<div className={`mb-3 ${style.wrapper}`}>
			<Form.Check
				id={color}
				type='checkbox'
				onClick={() => dispatch(changeColor(color))}
				label={<span className={`${style.label} bg-${color}`}>{color}</span>}
			/>
		</div>
	)
}

const Colors: FC = () => (
	<Form>
		{colors.map(({ bg, name }) => (
			<ColorFC key={name} color={bg} />
		))}
	</Form>
)

export default Colors
