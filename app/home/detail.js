'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  WebView,
} from 'react-native';

import { connect } from 'react-redux'

import Loading from '../components/loading'

class Detail extends Component {
  render() {
  	console.log(this.props)
    return (
      <WebView source={{uri: this.props.url}} renderLoading={() => {
      	return (
      		<Loading/>
      	)
      }} automaticallyAdjustContentInsets={true} scalesPageToFit={true}/>
    );
  }
}

const styles = StyleSheet.create({

});


export default connect(({route}) => ({route}))(Detail);