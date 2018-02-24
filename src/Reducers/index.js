import {combineReducers} from 'redux'
import CategoryReducer from './CategoryReducer'

var AppReducer=combineReducers({
    Category:CategoryReducer
})

export default AppReducer