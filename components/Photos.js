/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  ScrollView,
  View,
  CameraRoll,
  Image
} = React;

var fetchParams = {
	first: 5,
	groupTypes: 'All',
	assetType: 'Photos'
};

var Photos = React.createClass({
  render: function() {
  	var photos = this.state.photos || [];
  	var photoViews = [];
    photos.forEach((p) => {
      photoViews.push(
  				<View style={styles.imgView}>
  					<Image
  					  style={styles.img}
  					  source={{uri: p}} />

  				</View>
  			)
    })
  	for (var i in photos) {
  		photoViews.push(
  				<View style={styles.imgView}>
  					<Image
  					  style={styles.img}
  					  source={{uri: photos[i]}} />

  				</View>
  			)
  	}
    return (
      <ScrollView
        style={styles.scrollView}>
        <View style={styles.contentView}>
        	{photoViews}
        </View>
      </ScrollView>
    );
  },
  getInitialState: function() {
    return {
      photos: null,
    };
  },

  componentWillMount: function() {
    var _that = this;
    
    CameraRoll.getPhotos(fetchParams).then(function(data) {
    	var edges = data.edges;
    	var photos = [];
    	for (var i in edges) {
    		photos.push(edges[i].node.image.uri);
    	}
    	_that.setState({
    		photos: photos
    	})
    });
  }
});


var styles = StyleSheet.create({

	scrollView: {
		flexWrap: 'wrap'
	},

	contentView: {
		width: 400,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},

	imgView: {
		padding: 2
	},

	img: {
		width: 100,
		height: 120
	}
});


module.exports = Photos;
