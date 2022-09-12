import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
// redux state
import store from './redux'
// page :
import Home from './pages/Home'
// UI :
import 'bootstrap/dist/css/bootstrap.min.css'

const root = createRoot(document.getElementById('root')!)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Home />
		</Provider>
	</React.StrictMode>
)
