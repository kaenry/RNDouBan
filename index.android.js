'use strict';

import ComponentList from './ComponentList';
import NavBar from './components/NavBar';

import React, {
    Component,
    PropTypes,
} from 'react';

import {
    AppRegistry,
    Navigator
} from 'react-native';

class Hello extends React.Component {

  render() {
    return (
      <Navigator style={{flex: 1}} initialRoute={{
          name: '组件列表',
          component: ComponentList
        }}
        renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component name={route.name} {...route.params} navigator={navigator} />
          }
        }
        navigationBar={NavBar}
      />
    );
  }
};

AppRegistry.registerComponent('Hello', () => Hello);
