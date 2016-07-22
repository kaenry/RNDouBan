import { combineReducers } from 'redux';
import route from './route';
import {moviesReducer, eventsReducer} from './home/reducer';

export default appReducers = combineReducers({
    route,
    moviesReducer,
    eventsReducer,
    // other reducer
})
