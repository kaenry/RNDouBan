'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import Util from '../common/util'

class MovieCard extends Component {
  render() {
    const {movie} = this.props;
    return (
        <View style={styles.card}>
            <View style={styles.avatarView}>
                <Image source={{uri: movie.images.large}} style={styles.avatar}/>
            </View>
            <View style={styles.info}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text>{movie.genres.join('/')}</Text>
                <Text>{movie.pubdates}</Text>
                <Text>导演：{movie.directors.map((v, key) => v.name)}</Text>
                
                <Text style={{marginTop: 12}}>主演：</Text>
                <Text>{movie.casts.map((v, key) => {return v.name}).join('/')}</Text>
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


export default MovieCard;