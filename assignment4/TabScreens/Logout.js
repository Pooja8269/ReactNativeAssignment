import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Login from '../Login';

export default class Logout extends Component {
  constructor(props) {
    super(props);
  }
  logout() {
    Alert.alert(
    'Logout!!!',
    'Are you sure you want to logout',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => Actions.login()},
    ],
      {cancelable: false},
    );
    //Actions.login();
  }
  render() {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#8052ff',
            borderRadius: 3,
            padding: 10,
            height: 45,
            textAlign: 'center',
          }}
          onPress={this.logout.bind(this)}>
          <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 18 }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
