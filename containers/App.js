'use strict';

import React,{
  Component,
  PropTypes
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Navigator
} from 'react-native';

import { connect } from 'react-redux'
import {Scene, Reducer, Router, Switch, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'
import Button from "react-native-button";
import Icon from 'react-native-vector-icons/Ionicons';

import Register from '../pages/Register'
import Login from '../pages/Login'

import ProfileContainer from './ProfileContainer';
// import List from '../pages/List';
import List from './ListContainer';
import Detail from '../pages/CardDetail';
import AddQuestContainer from './AddQuestContainer';

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

// define this based on the styles/dimensions you use
const getSceneStyle = function (/* NavigationSceneRendererProps */ props, computedProps) {
  const style = {
    flex: 1,
    // backgroundColor: '#fff',
    // shadowColor: null,
    // shadowOffset: null,
    // shadowOpacity: null,
    // shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class TabIcon extends React.Component {
    render(){
        return (
            <Icon color={this.props.selected ? "red" :"black"} name={this.props.iconName} size={20}></Icon>
        );
    }
}

class App extends React.Component {

  render() {
		return (
      <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
        <Scene key="root">
        <Scene key="login" component={Login} title="登录"></Scene>
        <Scene key="register" component={Register} title="注册"></Scene>
          <Scene key="tabbar" tabs={true} initial={true}>
              <Scene key="list" component={List} title="首页" icon={TabIcon} iconName='md-home' initial={true} hideNavBar></Scene>
              <Scene key="addQuest" component={AddQuestContainer} title="发布" icon={TabIcon} iconName='md-add' hideNavBar></Scene>
              <Scene key="profile" component={ProfileContainer} title="我的" icon={TabIcon} iconName='md-person' hideNavBar></Scene>
          </Scene>
          <Scene key="detail" component={Detail} title="任务详情"></Scene>
        </Scene>
      </Router>
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
