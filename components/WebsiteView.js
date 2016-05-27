'use strict';

import Dimensions from 'Dimensions';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

import React, {
    Component,
    PropTypes,
} from 'react';

import {
  StyleSheet,
  WebView,
  View,
} from 'react-native';

export default class WebsiteView extends React.Component {
  render() {
    return (
      <View>
      	<WebView style={styles.webview} source={{uri: 'http://goojio.com/'}} automaticallyAdjustContentInsets={false}></WebView>
      </View>
    );
  }
};


var styles = StyleSheet.create({
	webview: {
		width: width,
		height: height,
		backgroundColor: '#92D778'
	}
});
