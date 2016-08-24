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
import Icon from 'react-native-vector-icons/Ionicons'

class RepoItem extends Component {
    render() {
        let repo = this.props.repo;
        return (
            <View style={[this.props.style, Style.p16, styles.item]}>
                <View style={[styles.infoView]}>
                    <View style={[styles.octicon]}>
                        <Icon name={repo.fork ? 'md-git-branch' : 'md-bookmarks'} size={16}></Icon>
                    </View>
                    <View style={styles.nameView}>
                        <Text style={styles.name} numberOfLines={1}>{repo.full_name}</Text>
                    </View>
                    <View style={[styles.starView]}>
                        <Text> {repo.watchers} </Text>
                        <View>
                            <Icon name='md-star' size={16}> </Icon>
                        </View>
                    </View>
                </View>
                <View style={[styles.descView]}>
                    <Text>{repo.description}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: '#fff',
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
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 10,
        width: Util.window.width/3*2,
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
        paddingLeft: 22,
        paddingTop: 6,
    },
});


export default RepoItem;