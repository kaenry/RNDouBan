'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import Spinner from 'react-native-spinkit'

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Spinner type='Bounce' color='#30A9DE'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default Loading;