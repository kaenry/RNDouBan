/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
// var Navigation = require('./components/Navigation');
var ComponentList = require('./ComponentList');
// var CameraImage = require('./components/CameraImage');

var {
    AppRegistry,
    NavigatorIOS
} = React;

var Hello = React.createClass({

  render: function() {
    return (
      <NavigatorIOS style={{flex: 1}} initialRoute={{
          component: ComponentList,
          title: '组件列表',
          passProps: {}
        }}/>
    );
  }
})

AppRegistry.registerComponent('Hello', () => Hello);
