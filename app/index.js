import React, {Component, PropTypes} from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import Nav from './navigation';
import Splash from './components/splash';

export default class App extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        store: configureStore(() => this.setState({isLoading: false})),
        isLoading: true,
      };
    }
    render() {
        if (this.state.isLoading) {
            return <Splash></Splash>;
        }
        return (
            <Provider store = {this.state.store} >
                <Nav />
            </Provider>
        )
    }
}
