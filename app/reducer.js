import { combineReducers } from 'redux';
import route from './route';
import {homeReducer} from './home/reducer';

export default appReducers = combineReducers({
    route,
    homeReducer,
    // other reducer
})
