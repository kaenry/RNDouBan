/* @flow */
'use strict';

import React,{
  Component,
  PropTypes
} from 'react';

import {
  StyleSheet,
  ListView,
  ScrollView,
  InteractionManager,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux'
import {fetchList} from '../actions/listActions'
import Card from '../components/Card'
import CardDetail from './CardDetail'
import Constants from '../common/Constants'
import GiftedSpinner from 'react-native-gifted-spinner'
import { bindActionCreators } from 'redux'

let isLoading = true;

class List extends React.Component{

  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
    this.state = {
      dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    }
  }

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(fetchList(isLoading));
  }

  render() {
    const {ListReducer} = this.props.state;

    let list = ListReducer.contents;
    return (
      <ScrollView>
      {
        ListReducer.isLoading
        ?
          <View style={styles.loading}>
            <GiftedSpinner />
          </View>
        :
        <ListView
          dataSource={this.state.dataSource.cloneWithRows(list)}
          renderRow={this._renderRow}
          enableEmptySections={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.listView}
        />
      }
      </ScrollView>
    );
  }

  _renderRow(data){
    return (
      <TouchableOpacity onPress={this._pressRow.bind(this, data)}>
        <Card {...data}></Card>
      </TouchableOpacity>
    )
  }

  _pressRow(data){
    console.log('press', data);
    Actions.detail({card: data});
  }
};

const styles = StyleSheet.create({
	loading: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Constants.window.height
	},

	listView: {
    padding: 5
	}
});

export default List
