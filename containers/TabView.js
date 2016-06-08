import React, {
  PropTypes
} from 'react';

import {
  StyleSheet
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileContainer from './ProfileContainer';
import ListContainer from './ListContainer';
import AddQuestContainer from './AddQuestContainer';

const tabBarItems = [
    {name:'index', title: '首页', icon: 'ios-home', component: ListContainer},
    {name:'add', title: '发布任务', icon: 'ios-add', component: AddQuestContainer},
    {name:'my', title: '我的', icon: 'ios-person', component: ProfileContainer},
]

export default class TabView extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          selectedTab: tabBarItems[0].name
      };
  }
  render() {
    return (
      <TabNavigator>
        {
          tabBarItems.map( (page, i) => {
            let Component = page.component;
            return (
              <TabNavigator.Item
                key={i}
                selected={this.state.selectedTab === page.name}
                renderIcon={() => <Icon name={page.icon} style={styles.itemStyle}/>}
                title={page.title}
                onPress={() => this.setState({ selectedTab: page.name })}>

                <Component navigator = {this.props.navigator} {...this.props}/>
              </TabNavigator.Item>
            )
          } )
        }
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
    itemStyle: {
      fontSize: 18,
      color: '#888',
      alignItems: 'center',
    }
})
