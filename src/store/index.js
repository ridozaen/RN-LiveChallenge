import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducres from './reducers'

const store = createStore(reducres, applyMiddleware(thunk))

export default store