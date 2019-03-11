import React, { Component } from "react";
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Image, FlatList, TouchableWithoutFeedback } from 'react-native';

const {height, width} = Dimensions.get('window');

export default class TaskListComponent extends Component {

  render() {
    return (
        <View style={styles.container}>
          <View style={{flex:1}}>
            <Text  style={styles.head}>TO DO</Text>

            <FlatList
              data={this.props.toDoItemList}
              renderItem={({item}) => 
              
              <View style={styles.flatview}>
                <TouchableWithoutFeedback onPress={ () => this.props.checkedTask(item)}>
                  <Image style={{width: 28, height: 28,}}
                          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/500px-Circle_-_black_simple.svg.png'}} />
                </TouchableWithoutFeedback>
                <Text style={styles.item}>{item.key}</Text>
              </View>}
            />
          </View>

          <View style={{flex:1}}>
            <Text  style={styles.head}>COMPLATED</Text>
            <FlatList
              data={this.props.complatedList}
              renderItem={({item}) => 
              <View style={styles.flatview}>
                <TouchableOpacity>
                  <Image style={{width: 28, height: 28,}}
                          source={{uri: 'https://ya-webdesign.com/images/svg-checkmark-flat-7.png'}} />
                </TouchableOpacity>
                <Text style={styles.itemComplate}>{item.key}</Text>
              </View>}
            />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#31315b',
    flex: 1,
    flexDirection: 'column',
  },
  head: {
    fontSize: 14,
    paddingLeft:36,
    paddingTop:20,
    paddingBottom: 10,
    color: '#8f90b5'
  },
  flatview: {
    flexDirection: 'row',
    backgroundColor: '#44446b',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
    padding: 18,
    borderColor: '#515175', 
    borderWidth: 1,
  },
   item: {
    margin:2,
    fontSize: 18,
    paddingLeft: 14,
    width:width,
    color: '#b4b4d5',
  },
  itemComplate: {
    margin:2,
    fontSize: 18,
    paddingLeft: 14,
    width:width,
    color: '#b4b4d5',
    textDecorationLine: 'line-through', 
    textDecorationStyle: 'solid',
  }
});
