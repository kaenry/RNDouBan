/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var WebsiteView = require('./components/WebsiteView');
import React, {
    NavigatorIOS,
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image
}
from 'react-native';

var NV = React.createClass({
    render: function () {
        return (
            <NavigatorIOS
              style={styles.container}
              initialRoute={{
                title: '易地接',
                component: WebsiteView
              }} />
            
            )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    img: {
        width: 50,
        height: 50
    },
});

AppRegistry.registerComponent('Hello', () => NV);
