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
  Dimensions,
  Image,
} from "react-native";
import { Actions } from "react-native-router-flux";


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Devin Jackson',
      age:'25',
      gender: 'Male',
      email: 'Jackson@gmail.com',
      contact: '+91 8955 4145 15',
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#8052ff', alignContent:'center', alignItems:'center', paddingTop:40}} >
       <Image
          style={{width: 80, height: 80}}
          source={{uri: 'http://www.stickpng.com/assets/images/585e4bcdcb11b227491c3396.png'}}
        />
      </View>
      <View style={{flex: 3, backgroundColor: '#ffffff'}} >
        <Text style={styles.itemTitle}>Name</Text>
        <Text style={styles.itemValue}>{this.state.name}</Text>
        <Text style={styles.itemTitle}>Age</Text>
        <Text style={styles.itemValue}>{this.state.age}</Text>
        <Text style={styles.itemTitle}>Gender</Text>
        <Text style={styles.itemValue}>{this.state.gender}</Text>
        <Text style={styles.itemTitle}>Email</Text>
        <Text style={styles.itemValue}>{this.state.email}</Text>
        <Text style={styles.itemTitle}>Contact</Text>
        <Text style={styles.itemValue}>{this.state.contact}</Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  itemTitle:{
    paddingLeft: 15,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 14,
    color: '#a8a8a8',
  },
  itemValue:{
    fontSize: 18,
    paddingLeft: 15,
    paddingBottom: 10,
    color: '#464646',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  }
});