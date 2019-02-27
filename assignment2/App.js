/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Dimensions} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const {height, width} = Dimensions.get('window');
class ListTemplate extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.head}>List of Data</Text>
        <FlatList
          data={this.props.name}
          renderItem={({item}) => 
          <View style={styles.flatview}>
            <Text style={styles.item}>{item.key}</Text>
          </View>}
        />
      </View>
    );
  }
}

export default class ListData extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <ListTemplate name={[{key: 'item_1'}, {key: 'item_2'}, {key: 'item_3'}, {key: 'item_4'}, {key: 'item_5'}, {key: 'item_6'}]} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  head: {
    fontSize: 22,
    width:width,
    justifyContent: 'center',
    padding:20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'lightblue',
  },
  flatview: {
    justifyContent: 'center',
    borderRadius: 2,
  },
  item: {
    padding:15,
    margin:2,
    backgroundColor: '#F5FCFF',
    fontSize: 18,
    width:width,
  }
});
