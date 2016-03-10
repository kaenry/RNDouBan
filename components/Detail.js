/* @flow */
'use strict';

var React = require('react-native');

var {
  ScrollView,
  Text
} = React;

var Detail = React.createClass({
  render: function() {
    return (
      <ScrollView>
        <Text>新闻详情</Text>
        <Text>这就是新闻详情，这就是新闻详情，这就是新闻详情</Text>
      </ScrollView>
    );
  }
});



module.exports = Detail;
