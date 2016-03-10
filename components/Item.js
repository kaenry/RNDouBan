/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text
} = React;

var Item = React.createClass({
  render: function() {
    return (
      <View style={styles.item}>
      	<Text style={styles.item_font}>{this.props.title}</Text>
      </View>
    );
  }
});


var styles = StyleSheet.create({
	item: {
		height: 40,
		marginLeft: 10,
		marginRight: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
		justifyContent: 'center'
	},

	item_font: {
		fontSize: 16
	}
});


module.exports = Item