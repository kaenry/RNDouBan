'use strict';

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

import Style from '../common/style';
import Icon from 'react-native-vector-icons/Ionicons'

class UserCard extends Component {
    render() {
        let user = this.props.user;
        return (
            <View style={[Style.p16, styles.card]}>
                <View style={[Style.valignCenter]}>
                    <Image resizeMode='center' source={{uri: user.avatar_url}} style={styles.avatar}></Image>
                </View>
                <View style={[Style.valignCenter]}>
                    <Text style={styles.name} numberOfLines={1}>{user.name}，{user.location}</Text>
                </View>
                <View style={[Style.valignCenter]}>
                    <Text numberOfLines={1}>{user.bio}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 4,
    },
    name: {
        color: '#333',
    },
    info: {
        marginTop: 2,
        marginBottom: 2,
        flexDirection: 'row',
    }
});


export default UserCard;