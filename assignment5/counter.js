/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Alert, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props){
    super(props)
    this.state={
      counter: 0
    }
  }
  increment(){
    var counter = this.state.counter + 1
    this.setState({counter: counter});
    
  }
  decrement(){
    var counter = this.state.counter - 1
    this.setState({counter: counter});
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{fontSize:18, color:'red'}}>Counter: {this.state.counter}</Text>
        <TouchableOpacity onPress={this.increment.bind(this)} style={{ paddingLeft: 40, paddingRight: 40,paddingTop: 15,paddingBottom: 15, backgroundColor: 'lightblue', margin: 10 }}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingLeft: 40, paddingRight: 40,paddingTop: 15,paddingBottom: 15, backgroundColor: 'lightblue', margin: 10 }} onPress={this.decrement.bind(this)}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}