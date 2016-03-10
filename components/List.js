/* @flow */
'use strict';

var React = require('react-native');
var Detail = require('./Detail');

var {
  StyleSheet,
  ScrollView,
  Text
} = React;

var List = React.createClass({
  render: function() {
    return (
      <ScrollView>
        <Text onPress={this.goTo}>航天局宣布“三体”获奖</Text>
        <Text onPress={this.goTo}>易地接正式成立</Text>
        <Text onPress={this.goTo}>咕啾网上线</Text>
        <Text onPress={this.goTo}>股市大跌，跌幅32.8%</Text>
      </ScrollView>
    );
  },
  goTo: function () {
  	this.props.navigator.push({
  		component: Detail,
  		title: '详情'
  	})
  }
});

var styles = StyleSheet.create({
	contentContainer: {
		paddingTop: 5
	},

	scrollView: {

	}
});


module.exports = List;
