import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Home from './container/Home'
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'

render(
	<React.StrictMode>
		<Provider store={store}>
			<Home />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)
