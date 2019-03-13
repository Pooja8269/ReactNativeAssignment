import * as React from 'react';
import { View, StyleSheet, Dimensions, Text, Image, FlatList } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Post from './TabScreens/Posts';
import Profile from './TabScreens/Profile';
import Logout from './TabScreens/Logout';
import { Actions } from 'react-native-router-flux';


const ProfileRoute = () => (
    <Profile style={[styles.scene, { backgroundColor: '#f2f2f2' }]}/>
);
const PostsRoute = () => (
  <Post style={[styles.scene, { backgroundColor: '#f2f2f2' }]}/>
);
 const LogoutRoute = () => (
   <Logout style={[styles.scene, { backgroundColor: '#f2f2f2' }]}/>
);

export default class TabScreen extends React.Component {
  constructor(props){
    super(props)
    this.user_data= {
      uname: this.props.uname
    }
  }


  state = {
    index: 0,
    routes: [
      { key: 'profile', title: 'Profile' },
      { key: 'post', title: 'Posts' },
      { key: 'logout', title: 'Logout' },
    ],
  };


  render() {
    return (
      <TabView indicatorStyle={{ backgroundColor: '#8052ff', height: 2 }}
        navigationState={this.state}
        renderScene = {({ route, jumpTo }) => {
          switch (route.key) {
            case 'profile':
              return <ProfileRoute jumpTo={jumpTo} />;
            case 'post':
              return <PostsRoute jumpTo={jumpTo} />;
            case 'logout':
              return <LogoutRoute jumpTo={jumpTo} />;
          }
        }}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}
 
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});