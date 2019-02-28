import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Actions } from "react-native-router-flux";

const {height, width} = Dimensions.get('window');

export default class About extends Component {
  constructor(props) {
    super(props);
   
  }
  
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: width/2, backgroundColor: '#ffffff', alignSelf:'baseline', padding:10}}>
            <Text style={{ color: '#F2B134', fontSize: 16, padding:5}}>User Name</Text>
            <Text style={{ color: '#F2B134', fontSize: 16, padding:5}}>Age</Text>
            <Text style={{ color: '#F2B134', fontSize: 16, padding:5}}>profession</Text>
          </View>
          <View style={{width: width/2, backgroundColor: '#ffffff', alignSelf:'baseline', padding:10}} >
            <Text style={{ color: '##545454', fontSize: 16, padding:5 }}>Ratnesh</Text>
            <Text style={{ color: '##545454', fontSize: 16, padding:5 }}>ss</Text>
            <Text style={{ color: '##545454', fontSize: 16, padding:5 }}>Software Engg.</Text>
          </View>
        </View>
        <Button title="Users List" onPress={() => Actions.user()} />
      </View>
    );
  }
}
