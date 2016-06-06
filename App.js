'use strict';

import React,{
  Component
} from 'react';

import {
  Text
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import ComponentList from './ComponentList';
import List from './components/List';
// import Photos from './components/Photos';

export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          selectedTab: 'home',
      };
  }
  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <List/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <ComponentList/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
};
