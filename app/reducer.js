import { combineReducers } from 'redux';
import route from './route';
import {moviesReducer} from './home/reducer';

export default appReducers = combineReducers({
    route,
    moviesReducer,
    // other reducer
})
