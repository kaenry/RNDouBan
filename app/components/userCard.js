'use strict';

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
} from 'react-native';

import Style from '../common/style';
import Icon from 'react-native-vector-icons/Ionicons'

class UserCard extends Component {
    render() {
        let user = this.props.user;
        return (
            <View>
                <View style={[Style.p16, styles.card]}>
                    <View style={[Style.valignCenter]}>
                        <Image resizeMode='center' source={{uri: user.avatar_url}} style={styles.avatar}></Image>
                    </View>
                    <View style={[Style.valignCenter, styles.nameView]}>
                        <Text style={styles.name} numberOfLines={1}>{user.name}</Text>
                    </View>
                    <View style={[Style.valignCenter, styles.locView]}>
                        <Icon name='ios-pin-outline' size={16}> </Icon>
                        <Text>{user.location}</Text>
                    </View>
                    <View style={[Style.valignCenter, styles.bio]}>
                        <Text numberOfLines={1}>{user.bio}</Text>
                    </View>
                </View>
                <View style={[Style.valignCenter, styles.numView]}>
                    <View style={[styles.num]}>
                        <Text style={styles.number}>{user.following}</Text>
                        <Text>Following</Text>
                    </View>
                    <View style={[styles.num]}>
                        <Text style={styles.number}>{user.public_repos}</Text>
                        <Text>Repositories</Text>
                    </View>
                    <View style={[styles.num]}>
                        <Text style={styles.number}>{user.followers}</Text>
                        <Text>Followers</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 4,
    },
    nameView: {
        paddingTop: 8,
    },
    name: {
        color: '#333',
    },
    locView: {
        paddingTop: 8,
        flexDirection: 'row',
    },
    bio: {
        paddingTop: 8,
        paddingBottom: 8,
    },
    numView: {
        marginTop: 1,
        backgroundColor: '#fff',
        padding: 16,
        // flex: 3,
        flexDirection: 'row',
    },
    num: {
        flex: 1,
        alignItems: 'center',
    },
    number: {
        color: '#333',
        fontSize: 20,
    }
});


export default UserCard;