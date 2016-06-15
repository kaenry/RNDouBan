import React, {
  Component,
  PropTypes
} from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux'

export default class Profile extends React.Component {
  render() {
    return (
      <View>
        <Text>
          Profile todo
        </Text>
        <Button onPress={Actions.login}>登录</Button>
        <Button onPress={Actions.register}>注册</Button>
      </View>
    );
  }
}

Profile.propTypes = {
};

Profile.defaultProps = {};
