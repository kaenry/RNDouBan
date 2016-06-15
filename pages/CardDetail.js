import React, {
  PropTypes,
} from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  WebView
} from 'react-native';
import {connect} from 'react-redux';
import Constants from '../common/Constants'
import Header from '../components/Header'

export default class CardDetail extends React.Component {
  render() {
    console.log(this.props);
    const {card} = this.props;
    // let avatar = card.avatar;
    let url = 'http://goojio.com/quest/detail/'+card.id;
    return (
      <View>
        <WebView style={styles.webview} source={{uri: url}} automaticallyAdjustContentInsets={false}></WebView>
      </View>

    );
  }
}

CardDetail.propTypes = {};

CardDetail.defaultProps = {
  card: {
    id: 0
  }
};

const styles = StyleSheet.create({
	card: {
		width: Constants.window.width,
		backgroundColor: '#fff',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5
	},
  cardAvatar: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  detail: {
    padding: 10,
    marginTop: 30
  },
  webview: {
    width: Constants.window.width,
    height: Constants.window.height,
  }
});

function mapStateToProps(state) {
  return {
    state
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators({
//     fetchList,
//   }, dispatch),
//   dispatch,
// })

export default connect(mapStateToProps)(CardDetail);
