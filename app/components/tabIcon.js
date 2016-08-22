import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class TabIcon extends React.Component {
  render(){
      return (
          <Icon color={this.props.selected ? "#d26911" :"#cdcdcd"} name={this.props.iconName} size={20}></Icon>
      );
  }
}

TabIcon.propTypes = {};

TabIcon.defaultProps = {};
