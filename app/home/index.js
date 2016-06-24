import React, {
  PropTypes,
} from 'react';

import {
  View,
  ScrollView,
  Text,
  Image,
  ListView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {connect} from 'react-redux'

import {fetchMovies} from './action'
import Loading from '../components/loading'

class Home extends React.Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
    this.state = {
      dataSource: ds
    };
  }
  componentDidMount() {
    console.log('didMount')
    const {dispatch} = this.props;
    dispatch(fetchMovies())
  }
  render() {
    console.log('render:',this.props)
    const {isFetching, movies} = this.props;

    if (isFetching) {
      return <Loading />
    }

    return (
      <ScrollView>
        <Text>{movies.title}<Text>
        <ListView dataSource={this.state.dataSource.cloneWithRows(movies.subjects)} renderRow={this._renderRow.bind(this)}
          enableEmptySections={true}
          bounces={false}
          showsVerticalScrollIndicator={false}/>        
      </ScrollView>
    );
  }
  _renderRow(row) {
    return (
      <TouchableOpacity>
          <View style={styles.movieItem}>
            <Image source={{uri: row.images.small}} style={styles.avatarImage}/>
            <Text>{row.title}</Text>
          </View>
      </TouchableOpacity>
    )
  }
}

Home.propTypes = {};

Home.defaultProps = {};

const styles = StyleSheet.create({
  outerContainer: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	},
  movieItem: {
    padding: 12
  },
  avatarImage: {
    width: 35,
    height: 35,
    borderRadius: 5
  }
})

function mapStateToProps(state) {
  return {
    ...state.moviesReducer
  }
}

export default connect(mapStateToProps)(Home)