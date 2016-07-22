'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import Util from '../common/util'

class EventCard extends Component {
  render() {
    const {event} = this.props;
    return (
        <View style={styles.card}>
            <View style={styles.avatarView}>
                <Image source={{uri: event.image_lmobile}} style={styles.avatar}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{event.title}</Text>
                <Text>{event.tags}</Text>
                <Text>{event.loc_name}</Text>
                <Text>地点：{event.time_str}</Text>
                
                <Text style={{marginTop: 12}}>价格：</Text>
                <Text>{event.price_range}</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        flexDirection: 'row',
    },
    avatarView: {
        width: (Util.window.width - 32) / 3,
    },
    avatar: {
        height: Util.window.height/4,
        width: (Util.window.width - 32) / 3,
    },
    info: {
        paddingLeft: 16,
        width: (Util.window.width - 32) / 3 * 2 - 16,
    },
    title: {
        fontSize: 18,
        color: 'black',
    }
});


export default EventCard;