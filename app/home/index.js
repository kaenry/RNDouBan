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
    Platform,
} from 'react-native';

import {
    connect
} from 'react-redux';
import {
    Actions
} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

import {
    fetchMovies,
    fetchEvents
} from './action';
import Loading from '../components/loading';
import LoadMore from '../components/loadMore';
import Util from '../common/util';
import MovieCard from '../components/movieCard';
import EventCard from '../components/eventCard';
import NavBar from '../components/navbar';
import Style from '../common/style';

class Home extends React.Component {
    constructor(props) {
        super(props);

        let moviesDS = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        let eventsDS = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            moviesDS: moviesDS,
            eventsDS: eventsDS,
            // data: [],
            refreshing: false,
        };
    }
    componentDidMount() {
        const {
            dispatch,
            movies,
        } = this.props;
        if (movies.subjects.length === 0) {
            dispatch(fetchMovies());
            dispatch(fetchEvents());
        }
    }
    render() {
        const {
            isFetching,
            movies,
            events,
        } = this.props;

        // if (!isFetching && movies.subjects.length > 0) {
        //     this.state.data = this.state.data.concat(movies.subjects);
        // }

        return (
            <View style={styles.wrapper}>
                <NavBar title='书影音&活动'></NavBar>
                <Swiper loop={false} renderPagination={this._renderPagination.bind(this)} style={Style.mt1}
                >
                    <View style={styles.children} dotTitle='电影'>
                        {isFetching && movies.subjects.length === 0 ? <Loading/ > : (
                      <ListView dataSource={this.state.moviesDS.cloneWithRows(movies.subjects)} renderRow={this._renderRow.bind(this)}
                        enableEmptySections={true}
                        onEndReached={this._handleLoadMore.bind(this)} 
                        onEndReachedThreshold={10}
                        initialListSize={3}
                        refreshControl={
                          <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['#00B51D']}
                            titleColor='#00B51D'
                          />
                        }
                        renderFooter={() => this.props.hasMore ? <LoadMore active={isFetching}/> : null }
                      />
                      )}
                    </View>
                    <View style={styles.children} dotTitle='活动'>
                        {isFetching && movies.subjects.length === 0 ? <Loading/ > : (
                      <ListView dataSource={this.state.eventsDS.cloneWithRows(events.events)} renderRow={this._renderEvent.bind(this)}
                        enableEmptySections={true}
                        onEndReached={this._eventLoadMore.bind(this)} 
                        onEndReachedThreshold={10}
                        initialListSize={3}
                        refreshControl={
                          <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefreshEvent.bind(this)}
                            colors={['#00B51D']}
                            titleColor='#00B51D'
                          />
                        }
                        renderFooter={() => this.props.hasMore ? <LoadMore active={isFetching}/> : null }
                      />
                      )}
                    </View>
                </Swiper>
            </View>

        );
    }
    _renderPagination(index, total, swiper) {
        // By default, dots only show when `total` > 2
        if (total <= 1) return null;

        let dotStyle = {
            width: Util.window.width / total,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 11,
            paddingBottom: 11,
        }

        let children = swiper.props.children;

        let dots = children.map((v, k) => {
            return (
                <View style={[dotStyle, index === k ? styles.activeDot : styles.dot]} key={k}>
                    <Text style={index === k ? styles.activeDotTitle : styles.dotTitle}>{v.props.dotTitle}</Text>
                </View>
            )
        })

        return (
            <View pointerEvents='none' style={[styles.paginationStyle]}>
            {dots}
          </View>
        )
    }
    _onRefresh() {
        // 刷新
        const {
            dispatch
        } = this.props;
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
    _onRefreshEvent() {
        // 刷新
        const {
            dispatch
        } = this.props;
        dispatch(fetchEvents())
    }
    _eventLoadMore() {
        // 加载更多
        if (this.props.hasMore) {
            const {
                dispatch,
                events
            } = this.props;
            let start = events.start + events.count;
            dispatch(fetchEvents(start))
        }

    }
    _renderRow(row) {

        return (
            <TouchableOpacity style={styles.movieItem} onPress={() => Actions.detail({url: row.alt})}>
                <MovieCard movie={row}></MovieCard>
            </TouchableOpacity>
        )
    }
    _renderEvent(row) {

        return (
            <TouchableOpacity style={styles.movieItem} onPress={() => Actions.detail({url: row.alt})}>
                <EventCard event={row}></EventCard>
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
    movieItem: {
        marginTop: 10,
    },
    paginationStyle: {
        position: 'absolute',
        top: 1,
        height: 44,
        width: Util.window.width,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderBottomColor: '#cdcdcd',
    },
    activeDot: {
        borderBottomWidth: 2,
        borderBottomColor: '#00B51D',
    },
    dot: {
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
    },
    dotTitle: {

    },
    activeDotTitle: {
        color: '#00B51D',
    },
    children: {
        flex: 1,
        paddingTop: 44,
    },
    cellSeparator: {
        height: 0.5,
        backgroundColor: "#DDD"
    },
});

function mapStateToProps(state) {
    return {
        ...state.moviesReducer,
        ...state.eventsReducer,
    }
}

export default connect(mapStateToProps)(Home)