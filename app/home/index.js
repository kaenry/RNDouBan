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
import {Actions} from 'react-native-router-flux'

import {fetchMovies} from './action'
import Loading from '../components/loading'
import Util from '../common/util'

class Home extends React.Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
    this.state = {
      dataSource: ds
    };
  }
  componentDidMount() {
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
        <View style={styles.listViewTitle}>
          <Text>{movies.title}</Text>
        </View>
        <ListView dataSource={this.state.dataSource.cloneWithRows(movies.subjects)} renderRow={this._renderRow.bind(this)}
          enableEmptySections={true}
          bounces={false}
          showsVerticalScrollIndicator={false}/>        
      </ScrollView>
    );
  }
  _renderRow(row) {
    const directors = row.directors;
    return (
      <TouchableOpacity style={styles.movieItem} onPress={() => Actions.detail({url: row.alt})}>
          <View style={styles.movieAvatar}>
            <Image source={{uri: row.images.large}} style={styles.avatarImage}/>
          </View>
          <View style={styles.movieInfo}>
            <Text style={styles.movieTitle}>{row.original_title}</Text>
            <Text>{row.genres.join(',')}</Text>
            <Text>{row.pubdates}</Text>
            <Text>导演：</Text>
            {directors.map((v, key) => {return (<Text key={key}>{v.name}</Text>)})}
            <Text style={{marginTop: 12}}>主演：</Text>
            <Text>{row.casts.map((v, key) => {return v.name}).join('/')}</Text>
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
  listViewTitle: {
    flex: 1,
    alignItems: 'center',
  },
  movieItem: {
    padding: 12,
    flex: 2,
    flexDirection: 'row',
  },
  avatarImage: {
    width: Util.window.width/2 - 15,
    height: Util.window.height/3,
  },
  movieInfo: {
    paddingLeft: 12,
  },
  movieTitle: {
    fontSize: 18,
    color: '#8CD790',
    width: Util.window.width/2 -12,
    marginBottom: 15,
  }
})

function mapStateToProps(state) {
  return {
    ...state.moviesReducer
  }
}

export default connect(mapStateToProps)(Home)