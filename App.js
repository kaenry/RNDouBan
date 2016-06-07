'use strict';

import React,{
  Component
} from 'react';

import {
  Text,
  StyleSheet
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import ComponentList from './ComponentList';
import List from './components/List';
import Icon from 'react-native-vector-icons/Ionicons';
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
          style={styles.itemStyle}
          selected={this.state.selectedTab === 'home'}
          renderIcon={() => <Icon name='ios-apps' color='#888' style={{fontSize: 18}}/>}
          title="Home"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <List/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          renderIcon={() => <Icon name='ios-person' color='#888' style={{fontSize: 18}}/>}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <ComponentList/>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
};
const styles = StyleSheet.create({
  itemStyle: {
    fontSize: 18,
    color: '#888',
    alignItems: 'center',
  }
});
