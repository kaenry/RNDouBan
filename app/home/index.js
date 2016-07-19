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
  RefreshControl,
} from 'react-native';

import {
  connect
} from 'react-redux'
import {
  Actions
} from 'react-native-router-flux'
import Swiper from 'react-native-swiper'

import {
  fetchMovies,
  fetchEvents
} from './action'
import Loading from '../components/loading'
import LoadMore from '../components/loadMore'
import Util from '../common/util'

class Home extends React.Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds,
      data: [],
      refreshing: false,
    };
  }
  componentDidMount() {
    const {
      dispatch
    } = this.props;
    dispatch(fetchMovies())
    dispatch(fetchEvents())
  }
  render() {
    const {
      isFetching,
      movies,
      events
    } = this.props;

    if (isFetching && movies.subjects.length <= 0) {
      return <Loading />
    }

    this.state.data = this.state.data.concat(movies.subjects)

    return (
      <View>
        <ScrollView style={{height:600}} automaticallyAdjustContentInsets={false}>
          <View style={styles.wrapper}>
            <Image source={{uri: 'http://skillimg.goojio.com/1-avatar-1467083304695'}} style={styles.cover}></Image>
            <View>
              <Text>豆瓣</Text>
            </View>
          </View>
        
          <Swiper loop={false} style={styles.wrapper}>
            <View style={styles.wrapper}>
              <ListView dataSource={this.state.dataSource.cloneWithRows(this.state.data)} renderRow={this._renderRow.bind(this)}
                enableEmptySections={true}
                onEndReached={this._handleLoadMore.bind(this)} 
                onEndReachedThreshold={10}
                initialListSize={2}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    color="#8CD790"
                  />
                }
                renderFooter={() => this.props.hasMore ? <LoadMore active={isFetching}/> : null }
                renderHeader={() => {
                  return (
                    <View style={styles.listViewTitle}>
                        <Text>{movies.title}</Text>
                    </View>
                  )
                }}
              /> 
            </View>
            <View style={styles.wrapper}>
              <ListView dataSource={this.state.dataSource.cloneWithRows(this.state.data)} renderRow={this._renderRow.bind(this)}
                enableEmptySections={true}
                onEndReached={this._handleLoadMore.bind(this)} 
                onEndReachedThreshold={10}
                initialListSize={2}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    color="#8CD790"
                  />
                }
                renderFooter={() => this.props.hasMore ? <LoadMore active={isFetching}/> : null }
                renderHeader={() => {
                  return (
                    <View style={styles.listViewTitle}>
                        <Text>{movies.title}</Text>
                    </View>
                  )
                }}
              /> 
            </View>
            <View style={styles.wrapper}>
              <ListView dataSource={this.state.dataSource.cloneWithRows(this.state.data)} renderRow={this._renderRow.bind(this)}
                enableEmptySections={true}
                onEndReached={this._handleLoadMore.bind(this)} 
                onEndReachedThreshold={10}
                initialListSize={2}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    color="#8CD790"
                  />
                }
                renderFooter={() => this.props.hasMore ? <LoadMore active={isFetching}/> : null }
                renderHeader={() => {
                  return (
                    <View style={styles.listViewTitle}>
                        <Text>{movies.title}</Text>
                    </View>
                  )
                }}
              /> 
            </View>
          </Swiper>
        </ScrollView>
        </View>

    );
  }
  _onRefresh() {
    // 刷新
    const {
      dispatch
    } = this.props;
    this.state.data = [];
    dispatch(fetchMovies())
  }
  _handleLoadMore() {
    // 加载更多
    if (this.props.hasMore) {
      const {
        dispatch,
        movies
      } = this.props;
      let start = movies.start + movies.count;
      dispatch(fetchMovies(start))
    }

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
  wrapper: {
    flex: 1,
  },
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
    width: Util.window.width / 2 - 15,
    height: Util.window.height / 3,
  },
  movieInfo: {
    paddingLeft: 12,
  },
  movieTitle: {
    fontSize: 18,
    color: '#8CD790',
    width: Util.window.width / 2 - 12,
    marginBottom: 15,
  },
  cover: {
    width: Util.window.width,
    height: 160,
  },
  logo: {
    width: 160,
    height: 64,
  }
})

function mapStateToProps(state) {
  return {
    ...state.homeReducer
  }
}

export default connect(mapStateToProps)(Home)