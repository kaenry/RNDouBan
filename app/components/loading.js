'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#30A9DE'/>
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