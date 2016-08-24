 import {
     AsyncStorage,
     Platform
 } from "react-native";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; // action async suppot
import createLogger from 'redux-logger';
import devTools from 'remote-redux-devtools';
import {autoRehydrate, persistStore} from 'redux-persist';
import callAPIMiddleware from './callAPIMiddleware';

const isDebugInChrome = __DEV__ && typeof window !== "undefined" && window.navigator.userAgent && window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1;

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

 function configureStore(onComplete: ? () => void) {
     const store = autoRehydrate()(createStoreWithMiddleware)(appReducers);
     persistStore(store, {
         storage: AsyncStorage
     }, onComplete);
     if (isDebugInChrome) {
         window.store = store
     }
     return store;
 }

export default configureStore;
