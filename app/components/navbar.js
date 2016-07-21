'use strict';

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import {
    Actions
} from 'react-native-router-flux';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Style from '../common/style';

class NavBar extends Component {
    render() {
        return (
            <View style={styles.navbar}>
                <View style={styles.backBtn}>
                    {this._renderBack()}
                </View>
                <View style={styles.navbarTitle}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
                <View style={[Style.valignCenter, styles.rightBtn]}>
                    {this._renderRight()}
                </View>
            </View>
        );
    }
    _renderBack() {

        switch (this.props.back) {
            case 'back':
                return (
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Icon name='md-arrow-back' size={20} color='#cdcdcd'></Icon>
                    </TouchableOpacity>
                )
            case 'cancel':
                return (
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Text style={Style.blueText}>取消</Text>
                    </TouchableOpacity>
                )
            default: 
                return null;
        }

    }
    _renderRight() {

        if (typeof this.props.renderRight === 'function') {
            return this.props.renderRight();
        }

        switch (this.props.renderRight) {
            case 'share':
                return (
                    <TouchableOpacity onPress={()=>alert('分享')} style={[styles.buttonStyle]}>
                        <Icon name='ios-redo-outline' size={14} color='#cdcdcd'></Icon>
                    </TouchableOpacity>
                )
            case 'button':
                return (
                    <Button onPress={this.props.onRight.bind(this)} containerStyle={[Style.redBtn, styles.buttonStyle]}>
                        <Icon name={this.props.rightIcon} size={14} color='#fff'> {this.props.rightTitle}</Icon>
                    </Button>
                )
            case 'text':
                return (
                    <TouchableOpacity onPress={this.props.onRight.bind(this)}>
                        <Text style={Style.redText}> {this.props.rightTitle}</Text>
                    </TouchableOpacity>
                )
            default:
                return null;
        }

    }
}

const styles = StyleSheet.create({
    navbar: {
        // flex: 3,
        height: 44,
        backgroundColor: '#fff',
        borderBottomWidth: 0,
        borderBottomColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    navbarTitle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        color: 'black',
    },
    backBtn: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 16,
    },
    rightBtn: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginRight: 16,
    },
    buttonStyle: {
        padding: 6,
    }
});


export default NavBar;