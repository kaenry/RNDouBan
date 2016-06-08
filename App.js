import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import appReducers from './reducers/appReducers';
import App from './containers/App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(appReducers);

export default class app extends React.Component {
    render() {
        return (
            <Provider store = {store} >
                <App />
            </Provider>
        )
    }
}
