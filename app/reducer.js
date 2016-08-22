import { combineReducers } from 'redux';
import route from './route';
import {reposReducer} from './home/reducer';
import {userReducer} from './user/reducer';

export default appReducers = combineReducers({
    route,
    reposReducer,
    userReducer,
    // other reducer
})
