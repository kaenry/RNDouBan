import {
    combineReducers
} from 'redux';
import route from './route';
import {
    searchReposReducer,
    repoReducer
} from './home/reducer';
import {
    userReducer
} from './user/reducer';

export default appReducers = combineReducers({
    route,
    searchReposReducer,
    repoReducer,
    userReducer,
    // other reducer
})