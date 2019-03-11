import React, { Component } from "react";
import {Platform, StyleSheet, Text, View, FlatList, Dimensions, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import ItemInputComponent from './ItemInput';
import TaskListComponent from './TaskList';

const {height, width} = Dimensions.get('window');
export default class HomeComponent extends Component {

  render() {
    return (
      <View style={styles.container}>

        <ItemInputComponent 
          toDoItemList={this.props.toDoItemList}
          borderRed={this.props.borderRed}
          addItem={this.props.addItem}
        />

        <View style={{borderColor: '#383863', borderWidth: 1, marginbottom:20}}></View>

        <TaskListComponent 
          toDoItemList={this.props.toDoItemList}
          complatedList={this.props.complatedList}
          checkedTask={this.props.checkedTask}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#31315b',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 22,
  },
});
