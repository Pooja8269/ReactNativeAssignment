/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Router,Stack,Scene} from "react-native-router-flux"
import Login from "./navComp/Login"
import UserList from "./navComp/UserList"
import About from "./navComp/about"
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login"/>
      <Scene key="about" component={About} title="About"/>
      <Scene key="user" component={UserList} title="Users List"/>
    </Stack>
  </Router>
);
export default App
