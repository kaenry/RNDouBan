import React, {
    PropTypes,
} from 'react';

import {
    View,
    ScrollView,
    Text,
    TextInput,
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
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    fetchRepo,
    searchRepos,
    changeSearchText,
} from './action';
import {
    fetchUser
} from '../user/action';
import Loading from '../components/loading';
import LoadMore from '../components/loadMore';
import Util from '../common/util';
import UserCard from '../components/userCard';
import RepoItem from '../components/repoItem';
import RepoCard from '../components/repoCard';
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
            dispatch(searchRepos());
        }
        dispatch(fetchUser());
        dispatch(fetchRepo());
    }
    render() {
        const {
            isFetching,
            isFetchingUser,
            isFetchingRepo,
            repos,
            user,
            repo,
            q,
            dispatch,
        } = this.props;

        return (
            <View style={styles.wrapper}>
                <NavBar title='GitHub'></NavBar>
                <Swiper loop={false} renderPagination={this._renderPagination.bind(this)} style={Style.mt1}
                >
                    <View style={styles.children} dotTitle='About'>
                        {isFetchingUser ? <Loading/ > : <UserCard user={user}></UserCard>}
                        {isFetchingRepo ? null : this._renderRepo(repo)}
                    </View>
                    <View style={styles.children} dotTitle='Repositories'>
                        {   
                            <View style={styles.searchView}>
                                <View style={styles.searchInputView}>
                                    <Icon name='md-search' size={24} style={styles.searchIcon}></Icon>
                                    <TextInput underlineColorAndroid='#fff' returnKeyType='search' onSubmitEditing={this._search.bind(this)} style={styles.searchInput} onChangeText={(text) => dispatch(changeSearchText(text))} value={q}></TextInput>
                                </View>
                            </View>
                        }
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
                        )
                    }
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
    _search() {
        const {
            dispatch,
            q,
        } = this.props;
        dispatch(searchRepos(q));
    }
    _onRefresh() {
        // 刷新
        const {
            dispatch,
            q,
        } = this.props;
        dispatch(searchRepos(q))
    }
    _loadMore() {
        // 加载更多
        const {
            dispatch,
            incomplete,
            repos,
            q,
        } = this.props;
        if (!incomplete) {
            dispatch(searchRepos(q, repos.page + 1));
        }

    }
    _renderRepo(row) {

        return (
            <TouchableOpacity style={styles.item} onPress={() => Actions.detail({url: row.html_url, title: row.full_name})}>
                <RepoItem repo={row}></RepoItem>
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
    searchView: {
        backgroundColor: '#fff',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 1,
        flexDirection: 'row',
    },
    searchInputView: {
        borderColor: '#ddd',
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        paddingLeft: 6,
        paddingRight: 4,
    },  
    searchInput: {
        paddingTop: 4,
        paddingBottom: 5,
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
        ...state.searchReposReducer,
        ...state.userReducer,
        ...state.repoReducer,
    }
}

export default connect(mapStateToProps)(Home)