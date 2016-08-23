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
    fetchRepos
} from './action';
import {
    fetchUser
} from '../user/action';
import Loading from '../components/loading';
import LoadMore from '../components/loadMore';
import Util from '../common/util';
import UserCard from '../components/userCard';
import RepoItem from '../components/repoItem';
import NavBar from '../components/navbar';
import Style from '../common/style';

class Home extends React.Component {
    constructor(props) {
        super(props);

        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            repos: ds,
            refreshing: false,
        };
    }
    componentDidMount() {
        const {
            dispatch,
            repos,
        } = this.props;
        if (repos.items.length === 0) {
            dispatch(fetchRepos());
        }
        dispatch(fetchUser());
    }
    render() {
        const {
            isFetching,
            isFetchingUser,
            repos,
            user,
        } = this.props;

        return (
            <View style={styles.wrapper}>
                <NavBar title='GitHub'></NavBar>
                <Swiper loop={false} renderPagination={this._renderPagination.bind(this)} style={Style.mt1}
                >
                    <View style={styles.children} dotTitle='About'>
                        {isFetchingUser ? <Loading/ > : <UserCard user={user}></UserCard>}
                    </View>
                    <View style={styles.children} dotTitle='Repositories'>
                        {(isFetching && repos.items.length === 0) ? <Loading/ > : (
                          <ListView dataSource={this.state.repos.cloneWithRows(repos.items)} renderRow={this._renderRepo.bind(this)}
                            enableEmptySections={true}
                            onEndReached={this._loadMore.bind(this)} 
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
        dispatch(fetchRepos())
    }
    _loadMore() {
        // 加载更多
        const {
            dispatch,
            repos,
            q,
        } = this.props;
        dispatch(fetchRepos(q, repos.page+1));

    }
    _renderRepo(row) {

        return (
            <TouchableOpacity style={styles.item} onPress={() => Actions.detail({url: row.url})}>
                <View>
                    <RepoItem repo={row}></RepoItem>
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
    item: {
        marginTop: 1,
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
        borderBottomColor: '#d26911',
    },
    dot: {
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
    },
    activeDotTitle: {
        color: '#d26911',
    },
    children: {
        flex: 1,
        paddingTop: 44,
        marginBottom: 50,
    },
    avatar: {
        width: 200,
        height: 200,
    },
    desc: {
        color: '#666',
    }
});

function mapStateToProps(state) {
    return {
        ...state.reposReducer,
        ...state.userReducer,
    }
}

export default connect(mapStateToProps)(Home)