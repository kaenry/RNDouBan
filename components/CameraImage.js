/* @flow */
'use strict';

import React,{
  Component
} from 'react';

import {
  StyleSheet,
  CameraRoll,
  View,
  Image,
  Text
} from 'react-native';


export default class CameraImage extends React.Component{
  render() {
    return (
    	<View style={styles.container}>
			<Image resizeMode='contain' style={styles.img} source={{uri: 'http://img.hb.aicdn.com/78ae0559d0dd5e0617afa3a911599462310248674a848-D4DvFT_fw658'}}>
      		</Image>
      		<Text style={styles.font} onPress={this.saveImage}>保存</Text>
    	</View>
    );
  }

  saveImage (img) {
  	var _that = this;
  	CameraRoll.saveImageWithTag('http://img.hb.aicdn.com/78ae0559d0dd5e0617afa3a911599462310248674a848-D4DvFT_fw658').then(function(data){alert(data)}, function (error) {alert(error)})
  }
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},

	img: {
		width: 400,
		height: 500
	},

	font: {
		marginTop: 20,
		padding: 10
	}
});
