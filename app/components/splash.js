'use strict'

import React,{Component, PropTypes} from "react"
import {StyleSheet,View,Image} from "react-native"
import Button from 'react-native-button';

import Style from '../common/style';

class Splash extends React.Component{
    render(){
        return (
            <View style={[styles.container, Style.valignCenter]}>
                <View style={styles.splashPanel}>
                    <Image source={require("../assets/GitHub_Logo.png")} style={styles.splashImage}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#FFF",  
    },
    splashImage:{
        width:240,
        height:100,
    },
})

export default Splash
