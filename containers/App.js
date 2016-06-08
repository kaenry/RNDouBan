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

import TabView from './TabView';

class App extends React.Component {

  render() {
		let { navigationState, onNavigate } = this.props

		return (
      <View style={styles.container}>
        <Navigator
            initialRoute={{name: 'TabView', component: TabView}}
            configureScene={()=>{
                return  Navigator.SceneConfigs.PushFromRight;
            }}
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
