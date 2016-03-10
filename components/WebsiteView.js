/* @flow */
'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

var {
  StyleSheet,
  WebView,
  View,
} = React;

var WebsiteView = React.createClass({
  render: function() {
    return (
      <View>
      	<WebView style={styles.webview} source={{uri: 'http://www.yidijie.com/'}} automaticallyAdjustContentInsets={false}></WebView>
      </View>
    );
  }
});


var styles = StyleSheet.create({
	webview: {
		width: width,
		height: height,
		backgroundColor: '#92D778'
	}
});


module.exports = WebsiteView;
