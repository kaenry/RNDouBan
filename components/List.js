/* @flow */
'use strict';

import React,{
  Component
} from 'react';

import {
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';

export default class List extends React.Component{
  render() {
    return (
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.listItem}>航天局宣布“三体”获奖...</Text>
        <Text style={styles.listItem}>易地接正式成立...</Text>
        <Text style={styles.listItem}>咕啾网上线...</Text>
        <Text style={styles.listItem}>股市大跌，跌幅32.8%...</Text>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
	contentContainer: {
		paddingTop: 5
	},

	listItem: {
    padding: 10
	}
});
