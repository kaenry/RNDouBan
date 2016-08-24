'use strict';

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    WebView,
} from 'react-native';

import {
    connect
} from 'react-redux';

import Style from '../common/style';
import Loading from '../components/loading';
import NavBar from '../components/navbar';

class Detail extends Component {
    constructor(props) {
      super(props);
    
      this.state = {};
    }
    render() {
        return (
            <View style={Style.wrapper}>
                <NavBar title={this.props.title} back='back'></NavBar>
                <WebView source={{uri: this.props.url}} renderLoading={() => {
                  return (
                    <Loading active={true}/>
                  )
                }} startInLoadingState={true} automaticallyAdjustContentInsets={true} scalesPageToFit={true}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({

});


export default connect(({
    route
}) => ({
    route
}))(Detail);