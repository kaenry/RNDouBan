
import React, {
  Component,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  base : {
    backgroundColor: 'transparent',
    padding: 10
  },
  backText : {
    color : '#888'
  },
  rightNavButtonText: {
    color: '#888'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color : '#000'
  },
  backView: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

let NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <View style={styles.backView}>
          <TouchableOpacity
            underlayColor="transparent"
            onPress={() => { if (index > 0) { navigator.pop() } }}>
            <Text style={ styles.backText }>返回</Text>
          </TouchableOpacity>
        </View>
        )
    }
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (
      <TouchableHighlight
         onPress={ () => route.onPress() }>
         <Text style={ styles.rightNavButtonText }>
              { route.back || 'Right Button' }
         </Text>
       </TouchableHighlight>)
  },
  Title(route, navigator, index, navState) {
    // console.log(route , navigator , index , navState)
    return <View><Text style={styles.title}>{route.name}</Text></View>
  }
}

export default (
  <Navigator.NavigationBar style={styles.base} routeMapper={NavigationBarRouteMapper}/>
)
