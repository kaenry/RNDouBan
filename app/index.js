import React, {Component, PropTypes} from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Nav from './navigation';

export default class App extends React.Component {
    render() {
        return (
            <Provider store = {store} >
                <Nav />
            </Provider>
        )
    }
}
