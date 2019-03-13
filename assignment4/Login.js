import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView 
} from "react-native";
import { Actions } from "react-native-router-flux";
import { LinearGradient } from 'expo';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      uname: "",
      password: "",
      showAnotherComponent: false,
    }
  }
  login(){
    if(this.state.uname != '' && this.state.password != '')
    {
      this.setState({showAnotherComponent: true});
      Actions.tabScreen()
    }
    else{
      alert("uname and password should not be empty!")
    }
  }

  render() {
    return (
      <LinearGradient
          colors={['#ff5e7c', '#ff78a3', '#8052ff']}
          style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
        <KeyboardAvoidingView  style={{flex: 1, justifyContent: "center", alignItems: "center" }}
        behavior="padding">
          <View style={{ fontSize: 20, alignContent: "center", padding:30, backgroundColor: '#f2f2f2', opacity: 0.85, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, textAlign: "center", color: '##ED553B', marginEnd: 10 }}>Login</Text>
            <View>
              <TextInput style={{fontSize: 18, marginTop: 20, minWidth:300, height: 40, borderColor: '#8052ff',
              borderWidth: 1, paddingLeft: 15, paddingRight: 15, borderRadius: 3 }} placeholder="Enter username" 
              value={this.state.uname} onChangeText={(uname)=> this.setState({uname})} />

              <TextInput style={{fontSize: 18, marginTop: 20, minWidth:300, marginBottom: 20,height: 40, borderColor: '#8052ff',
              borderWidth: 1, paddingLeft: 15, paddingRight: 15, borderRadius: 3 }} placeholder="Enter password" 
              secureTextEntry={true} value={this.state.password} onChangeText={(password)=> this.setState({password})} />
            </View>
            <TouchableOpacity  style={{backgroundColor:'#8052ff', borderRadius: 3, 
            padding: 10, height:45, textAlign:'center'}} onPress={this.login.bind(this)} >
              <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 18}}>Login</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView >
      </LinearGradient>
    );
  }
}
