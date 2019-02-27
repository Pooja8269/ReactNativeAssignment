/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Alert} from 'react-native';

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
      fname: "",
      lname: "",
      age: "",
      showAnotherComponent: false,
    }
  }

  submit(){
    if(this.state.fname != '' && this.state.lname != '' && this.state.age != '')
    {
      this.setState({showAnotherComponent: true});
    }
    else{
      alert("Please enter data on all fields!");
    }
  }
  goBack(){
    this.setState({showAnotherComponent: false, fname: "", lname: "", age: ""});
  }
  clear(){
    this.setState({fname: "", lname: "", age: ""});
  }
  render() {
    return (

      <View>
        {this.state.showAnotherComponent == false &&
       <View style={{marginTop: 30, padding: 20}}>
         <Text style={{fontSize: 20}}>React native first component</Text>
         <TextInput style={{fontSize: 18, marginTop: 20, minWidth:300, height: 40, borderColor: '#0894A1',
            borderWidth: 1, paddingLeft: 15, paddingRight: 15, borderRadius: 3 }}
             placeholder="Enter First Name" value={this.state.fname}
          onChangeText={(fname)=> this.setState({fname})}/>
          <TextInput style={{fontSize: 18, marginTop: 20, minWidth:300, height: 40, borderColor: '#0894A1',
            borderWidth: 1, paddingLeft: 15, paddingRight: 15, borderRadius: 3 }}
             placeholder="Enter Last Name" value={this.state.lname}
          onChangeText={(lname)=> this.setState({lname})}/>
          <TextInput style={{fontSize: 18, marginTop: 20, marginBottom:20, minWidth:300, height: 40, borderColor: '#0894A1',
            borderWidth: 1, paddingLeft: 15, paddingRight: 15, borderRadius: 3 }}
             placeholder="Enter Age" value={this.state.age}
          onChangeText={(age)=> this.setState({age})}/>

          <Button title="SUBMIT" style={{margin: 10}} onPress={this.submit.bind(this)}/>
          <Button title="CLEAR" style={{margin: 10}} onPress={this.clear.bind(this)}/>
       </View>
        }
        {this.state.showAnotherComponent == true &&
        <View style={{marginTop: 30, padding: 20}}>
          <Text style={{fontSize: 18}}>Fname: {this.state.fname}</Text>
          <Text style={{fontSize: 18}}>Lname: {this.state.lname}</Text>
          <Text style={{fontSize: 18}}>Age: {this.state.age} </Text>
          <Button title="Go Back"  style={{margin: 10}} onPress={this.goBack.bind(this)}/>
        </View>
        }
      </View>
    );
  }
}

