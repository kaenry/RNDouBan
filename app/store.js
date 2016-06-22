import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // action async suppot

import appReducers from './reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(appReducers);

export default store;
