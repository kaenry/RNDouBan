'use strict';

import React, {
    Component,
    PropTypes
} from 'react';

import {
    View,
    Text,
    StyleSheet,
    Navigator,
    BackAndroid,
    ToastAndroid,
    Platform,
} from 'react-native';

import {
    connect
} from 'react-redux'
import {
    Scene,
    Reducer,
    Router,
    TabBar,
    Actions
} from 'react-native-router-flux'
import TabIcon from '../components/tabIcon'

import Home from '../home'
import Notify from '../notify'
import User from '../user';

import Login from '../authorize/login'
import Detail from '../home/detail'

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
        console.log("ACTION:", action);
        console.log("STATE:", state);
        return defaultReducer(state, action);
    }
};

// define this based on the styles/dimensions you use
const getSceneStyle = function( /* NavigationSceneRendererProps */ props, computedProps) {
    const style = {
        flex: 1,
        backgroundColor: '#F1F1F1',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 44;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

class Nav extends React.Component {

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        return Actions.pop()
    }

    render() {
        return (
            <Router getSceneStyle={getSceneStyle}>
        <Scene key="root">
          <Scene key="login" component={Login} title="登录"></Scene>
          <Scene key='detail' component={Detail} title='电影详情' hideTabBar></Scene>
          <Scene key="tabs" tabs={true} initial={true} tabBarStyle={styles.tabBarStyle} navigationBarStyle={styles.navbar}>
              <Scene key="home" component={Home} title="书影音&活动" icon={TabIcon} iconName='md-home' initial={true} hideNavBar>
              </Scene>
              <Scene key="notify" component={Notify} title="提醒" icon={TabIcon} iconName='md-notifications'></Scene>
              <Scene key="user" component={User} title="我的" icon={TabIcon} iconName='md-person'></Scene>
          </Scene>
        </Scene>
      </Router>
        )
    }
}

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1
    },
    container: {
        flex: 1
    },
    tabBarStyle: {
        backgroundColor: '#fff'
    },
    navbar: {
        height: 44,
        backgroundColor: '#fff',
        borderBottomWidth: 0,
    }
})

export default connect(({
    route
}) => ({
    route
}))(Nav)