/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  CameraRoll,
  View,
  Image,
  Text
} = React;


var CameraImage = React.createClass({
  render: function() {
    return (
    	<View style={styles.container}>
			<Image resizeMode='contain' style={styles.img} source={{uri: 'http://img.hb.aicdn.com/78ae0559d0dd5e0617afa3a911599462310248674a848-D4DvFT_fw658'}}>
      		</Image>
      		<Text style={styles.font} onPress={this.saveImage}>保存</Text>
    	</View>
    );
  },

  saveImage: function (img) {
  	var _that = this;
  	CameraRoll.saveImageWithTag('http://img.hb.aicdn.com/78ae0559d0dd5e0617afa3a911599462310248674a848-D4DvFT_fw658', function(data){alert(data)}, function (error) {alert(error)})
  }
});


var styles = StyleSheet.create({
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


module.exports = CameraImage;
