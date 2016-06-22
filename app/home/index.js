import React, {
  PropTypes,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.outerContainer}>
        <Text>
          Home
        </Text>
      </View>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

const styles = StyleSheet.create({
  outerContainer: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	},
  container: {
    flex: 1
  }
})
