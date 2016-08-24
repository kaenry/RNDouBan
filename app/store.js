import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // action async suppot
import createLogger from 'redux-logger';
import devTools from 'remote-redux-devtools';
import callAPIMiddleware from './callAPIMiddleware';

const logger = createLogger({
	level: 'log',
	duration: true,
	diff: true,
});

import appReducers from './reducer';

const createStoreWithMiddleware = compose(
	applyMiddleware(thunk, logger, callAPIMiddleware),
	devTools(),
)(createStore);

const store = createStoreWithMiddleware(appReducers);

export default store;
