import { combineReducers } from 'redux'
import home from './home'

const reducer = combineReducers({
	account:home
})

export default reducer