/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
// var Navigation = require('./components/Navigation');
var ComponentList = require('./ComponentList');
var List = require('./components/List');

var {
    AppRegistry,
    NavigatorIOS,
    TabBarIOS
} = React;

var Hello = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'list'
    }
  },

  render: function() {
    return (
      // <NavigatorIOS style={{flex: 1}} initialRoute={{
      //     component: ComponentList,
      //     title: '组件列表',
      //     passProps: {}
      //   }}/>
      <TabBarIOS>
        <TabBarIOS.Item title="组件列表" selected={this.state.selectedTab === 'list'}
          systemIcon="bookmarks"
          onPress={()=>{
            this.setState({
              selectedTab: 'list'
            });
          }}>
          <NavigatorIOS style={{flex: 1}} initialRoute={{
              component: ComponentList,
              title: '组件列表',
              passProps: {}
            }}/>
        </TabBarIOS.Item>
        <TabBarIOS.Item title="相机" selected={this.state.selectedTab === 'photos'}
          systemIcon="favorites"
          onPress={()=>{
            this.setState({
              selectedTab: 'photos'
            });
          }}>
          <NavigatorIOS style={{flex: 1}} initialRoute={{
              component: List,
              title: '相机',
              passProps: {}
            }}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
})

AppRegistry.registerComponent('Hello', () => Hello);
