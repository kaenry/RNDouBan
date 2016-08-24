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
import Util from '../common/util';
import Icon from 'react-native-vector-icons/Ionicons';

class RepoCard extends Component {
    render() {
        let repo = this.props.repo;
        return (
            <View style={[styles.card]}>
                <View style={styles.nameView}>
                    <Icon name={repo.fork ? 'md-git-branch' : 'md-bookmarks'} size={16}> </Icon>
                    <Text style={styles.name} numberOfLines={1}>{repo.full_name}</Text>
                </View>
                <View style={[styles.descView]}>
                    <Text>{repo.description}</Text>
                </View>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    infoView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    octicon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    name: {
        color: '#4078c0',
    },
    starView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'flex-end',
        flex: 1,
    },
    descView: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
    },
});


export default RepoCard;