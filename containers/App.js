'use strict';

import React,{
  Component,
  PropTypes
} from 'react';

import {
  View,
  StyleSheet,
  Navigator
} from 'react-native';

import { connect } from 'react-redux'

import TabView from './TabView'
import BackAndroid from 'BackAndroid'

class App extends React.Component {

  // componentDidMount() {
  //   BackAndroid.addEventListener('hardwareBackPress', this._handleBackButton);
  // }
  //
  // componentWillUnmount() {
  //   BackAndroid.removeEventListener('hardwareBackPress', this._handleBackButton);
  // }
  //
  // _handleBackButton() {
  //   console.log(this.props);
  //   const {navigator} = this.props;
  //   if (navigator && navigator.getCurrentRoutes().length > 1) {
  //     navigator.pop();
  //     return true;
  //   }
  //   return false;
  // }

  render() {

		return (
      <View style={styles.container}>
        <Navigator
            initialRoute={{name: 'TabView', component: TabView}}
            renderScene={(route, navigator) => {
                let Component = route.component;
                return (
                    <Component navigator = {navigator} route = {route} {...route.passProps} {...this.props} />
                )
            }}
        />
      </View>
		)
	}
}

const styles = StyleSheet.create({
  outerContainer: {
		flex: 1
	},
  container: {
    flex: 1
  }
})

export default App
