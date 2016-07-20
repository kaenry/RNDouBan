import React, {
    PropTypes,
} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Stylesheet,
} from 'react-native';

export default class User extends React.Component {
    render() {
        return (
            <View>
                <View style={[styles.avatarView]}>
                  <TouchableOpacity style={styles.avatarTouch}>
                      <Image source={{uri: 'http://userimg.yidijie.com/animal-avatar11.jpg'}} style={styles.avatar}></Image>
                      <Text style={styles.avatarText}>点击修改头像</Text>
                  </TouchableOpacity>
                </View>
            </View>
        );
    }
}

User.propTypes = {};

User.defaultProps = {};

const styles = StyleSheet.create({
    avatarTouch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarText: {
        fontSize: 14,
        marginLeft: 20,
    },
    avatarView: {
        marginTop: 1,
        paddingTop: 20,
        paddingBottom: 20,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    }
});