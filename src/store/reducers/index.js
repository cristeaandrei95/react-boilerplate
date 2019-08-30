import { combineReducers } from 'redux'
import { EXAMPLE } from '../actions/types'
import preloadedState from './preloadedState'

const exampleReducer = (state = preloadedState, action) => {
    switch (action.type) {
        case EXAMPLE:
            return {
               ...action.payload 
            }
        default:
            return state
    }
}

export default combineReducers({
    exampleReducer
});
