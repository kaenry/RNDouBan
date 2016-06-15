import React, {
  PropTypes,
} from 'react';

import {
  View,
  TextInput
} from 'react-native';

import Button from 'react-native-button'

export default class Register extends React.Component {
  render() {
    return (
      <View>
        <TextInput placeholder="邮箱"/>
        <TextInput placeholder="密码" password={true}/>
        <Button>注册</Button>
      </View>
    );
  }
}

Register.propTypes = {};

Register.defaultProps = {};
