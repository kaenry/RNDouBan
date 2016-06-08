import React, {
  PropTypes,
} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Constants from '../common/Constants'

export default class Card extends React.Component {
  // constructor(props){
  //     super(props);
  //     this.state = {
  //       id: 0,
  //       nickname: '',
  //       numReplies: 0,
  //       replies: [],
  //       about: '',
  //       avatar: '',
  //       createTime: '',
  //       detail: ''
  //     };
  // }

  render() {
    return (
      <View style={styles.card}>
        <Text>
          {this.props.nickname}
        </Text>
        <Text>
          {this.props.detail}
        </Text>
        <Text>
          {this.props.about}
        </Text>
      </View>
    );
  }
}

Card.propTypes = {

};

Card.defaultProps = {
  id: 0,
  nickname: '',
  numReplies: 0,
  replies: [],
  about: '',
  avatar: '',
  createTime: '',
  detail: ''
};

const styles = StyleSheet.create({
	card: {
		width: Constants.window.width,
		backgroundColor: '#fff',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5
	}
});
