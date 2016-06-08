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
  Text,
  View
} from 'react-native';

import {fetchList} from '../actions/listActions'
import Card from '../components/Card'
import Loading from '../components/Loading'

let isLoading = true;

export default class Main extends React.Component{

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
    InteractionManager.runAfterInteractions(() => {
      const {dispatch} = this.props;
      dispatch(fetchList(isLoading));
    })
  }

  render() {
    const {ListReducer} = this.props.state;

    let list = ListReducer.contents;
    return (
      <ScrollView>
      {
        ListReducer.isLoading
        ?
        <Loading />
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
        <Card {...data}></Card>
    )
  }
};

const styles = StyleSheet.create({
	loading: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	},

	listView: {
    padding: 5
	}
});
