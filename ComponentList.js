'use strict';

import CameraImage from './components/CameraImage';
import WebsiteView from './components/WebsiteView';
import Photos from './components/Photos';

import React, {
    Component,
    PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableHighlight
} from 'react-native';
export default class ComponentList extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var list = [
      {
        name: 'CameraImage',
        title: 'CameraImage',
        info: '获取相册，保存图片',
        module: CameraImage
      },
      {
        name: 'WebsiteView',
        title: 'WebsiteView',
        info: 'WebView',
        module: WebsiteView
      },
      {
        name: 'Photos',
        title: 'Photos',
        info: '相册',
        module: Photos
      }
    ];
    this.state = {
      dataSource: ds.cloneWithRows(list)
    };
  }
  render() {

    return (
        <ListView contentContainerStyle={styles.wrapper} style={styles.container} dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}/>
    );
  }
  _renderRow(rowData) {
    return (
        <TouchableHighlight underlayColor={'#6ee340'} style={styles.button} onPress={this._pressRow.bind(this, rowData)}>
          <View style={styles.item}>
            <Text style={styles.item} >
              {rowData.title}
            </Text>
            <Text style={styles.info}>
              {rowData.info}
            </Text>
          </View>
        </TouchableHighlight>
    )
  }
  _pressRow(rowData) {
    this.props.navigator.push({
      // component: rowData.module,
      name: rowData.title,
      // id: rowData.name,
      component: rowData.module
    });
  }

};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
  },
  button: {
      width: 200,
      height: 40,
      marginBottom: 10,
      borderRadius: 6,
      backgroundColor: '#f38',
      alignItems: 'center',
      justifyContent: 'center',
  },
  item: {
    alignItems: 'center'
  },
  info: {
    fontSize: 12,
    color: '#fff'
  }
});
