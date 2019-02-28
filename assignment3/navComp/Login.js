import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      uname: "",
      lname: "",
      age: "",
      showAnotherComponent: false
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <View style={{ fontSize: 20, alignContent: "center", marginTop: -20, padding:30, backgroundColor: '#f2f2f2' }}>
          <Text style={{ fontSize: 20, textAlign: "center", color: '##ED553B', marginEnd: 10 }}>Login</Text>
          <View>
            <TextInput style={{fontSize: 18, marginTop: 20, minWidth:300, height: 40, borderColor: '#0894A1',
            borderWidth: 1, paddingLeft: 15, paddingRight: 15, borderRadius: 3 }} placeholder="Enter username" 
            value={this.state.uname} onChangeText={(uname)=> this.setState({uname})} />

            <TextInput style={{fontSize: 18, marginTop: 20, minWidth:300, marginBottom: 20,height: 40, borderColor: '#0894A1',
            borderWidth: 1, paddingLeft: 15, paddingRight: 15, borderRadius: 3 }} placeholder="Enter password" 
            secureTextEntry={true} value={this.state.uname} onChangeText={(uname)=> this.setState({uname})} />
          </View>
          <Button title="Login" onPress={() => Actions.about()} />
        </View>
      </View>
    );
  }
}
