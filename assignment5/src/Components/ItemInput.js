import React, { Component } from "react";
import {Platform, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Image } from 'react-native';

const {height, width} = Dimensions.get('window');

export default class ItemInputComponent extends Component {

  constructor(props){
    super(props);
    this.state= {
      newItem: '',
      borderRed: '#282851',
    }
  }
  
  addItemState(item){
    var hasValue = false;
    if(item != ''){
      for(var i = 0; i < this.props.toDoItemList.length; i++) {
        if (this.props.toDoItemList[i].key == item) {
          hasValue = true;
        }
      }
      if(hasValue){
        alert("Duplicate items not allowed.");
        this.setState({borderRed:'#df4159'})
        hasValue = false;
      }
      else{
        this.setState({borderRed:'#282851'})
        this.props.addItem(item);
      }
    }
    else{
      this.setState({borderRed:'#df4159'})
      alert("Please enter content on add item filed..");
    }
  }

  clear(){
    this.setState({newItem:''});
  }
  render() {
    return (
      <View style={{flexDirection: 'row', backgroundColor: '#282851', borderRadius: 30, margin: 20,
        padding: 7, borderColor: this.state.borderRed, borderWidth: 2}}>

        <View style={{width: width-100}}>
          <TextInput style={{fontSize:18, paddingLeft: 25, paddingTop:4, color: '#ffffff'}}
            placeholder="Add Items" placeholderTextColor="#ffffff" onChangeText={(newItem)=> this.setState({newItem})}  value={this.state.newItem} />
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={ () => {this.addItemState(this.state.newItem); this.clear();}}>
            <Image style={{width: 40, height: 40, marginRight: 20,}}
                    source={{uri: 'https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/add_blue.png'}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
