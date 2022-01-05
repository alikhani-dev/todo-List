import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer.js'

const composeEnhancers = composeWithDevTools()
const store = createStore(reducer, composeEnhancers)

export default store
