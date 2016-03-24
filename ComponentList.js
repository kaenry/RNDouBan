var React = require('react-native');

var {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableHighlight
} = React;
var ComponentList = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var list = [
      {
        name: 'CameraImage',
        title: 'CameraImage',
        info: '获取相册，保存图片',
        module: require('./components/CameraImage')
      },
      {
        name: 'WebsiteView',
        title: 'WebsiteView',
        info: 'WebView',
        module: require('./components/WebsiteView')
      },
      {
        name: 'Photos',
        title: 'Photos',
        info: '相册',
        module: require('./components/Photos')
      }
    ];
    return {
      dataSource: ds.cloneWithRows(list)
    };
  },
  render: function() {

    return (
        <ListView contentContainerStyle={styles.wrapper} style={styles.container} dataSource={this.state.dataSource} renderRow={this._renderRow}/>
    );
  },
  _renderRow: function(rowData) {
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
  },
  _pressRow: function(rowData) {
    this.props.navigator.push({
      component: rowData.module,
      title: rowData.title,
      rightButtonTitle: '返回'
    });
  }

});

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

module.exports = ComponentList;
