'use strict'

import React, {
    Component
} from "react"
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

class LoadMore extends Component {
    render() {
        return (
            <View style={styles.loadMore}>
               {this.props.active?<ActivityIndicator color="rgba(0,0,0,0.3)" animating={this.props.active}/>:
               <Icon name="arrow-upward" size={20} color="#8CD790"/>}
               <Text style={styles.loadMoreText}>{this.props.active?"加载中":"上拉加载更多"}</Text>
            </View>
        )
    }
}

LoadMore.defaultProps = {
    active: false
}

const styles = StyleSheet.create({
    loadMore: {
        // backgroundColor:"#F7F7F7",
        flex: 1,
        flexDirection: "row",
        height: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    loadMoreText: {
        paddingLeft: 5,
        fontSize: 13,
        color: "#8CD790"
    },
    loadMoreIcon: {
        color: "#8CD790"
    }
})

export default LoadMore