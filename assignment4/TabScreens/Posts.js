import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  TextInput,
  ToastAndroid,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      title: '',
      body: '',
      isLoading: true,
      showAddComponent: false,
    };
  }

  addScreenView() {
    this.setState({
      showAddComponent: true,
    });
  }

  addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: 1,
        id: 102,
        title: 'yourValue',
        body: 'yourOtherValue',
      }),
    }).then(response => response.json())
      .then(json => {
        alert("111444");
        console.log("dsf");
        this.setState({ dataArray: json, isLoading: false });
      })
      .catch(error => {
        alert("sfda");
        console.log(error);
      });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ dataArray: responseJson, isLoading: false });
        ToastAndroid.show('Data fetched', ToastAndroid.SHORT, 10);
      });
  }

  render() {
    return (
      <View style={{ margin: 5, backgroundColor: '#f2f2f2' }}>
        {this.state.showAddComponent == false && (
          <View>
            <View style={styles.plus}>
              <TouchableOpacity onPress={this.addScreenView.bind(this)}>
                <Text
                  style={{
                    backgroundColor: '#8052ff',
                    padding: 6,
                    borderRadius: 4,
                    color: '#ffffff',
                    textAlign: 'center',
                    margin: 10,
                  }}>
                  Add Post
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={this.state.dataArray}
              renderItem={({ item }) => (
                <View style={styles.flatview}>
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.body}>{item.body}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        )}
        {this.state.showAddComponent == true && (
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Add Post</Text>
            <TextInput
              style={{
                fontSize: 18,
                marginTop: 20,
                minWidth: 300,
                height: 40,
                borderColor: '#8052ff',
                borderWidth: 1,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 3,
              }}
              placeholder="Enter First Name"
              value={this.state.title}
              onChangeText={title => this.setState({ title })}
            />
            <TextInput
              style={{
                fontSize: 18,
                marginTop: 20,
                minWidth: 300,
                height: 40,
                borderColor: '#8052ff',
                borderWidth: 1,
                paddingLeft: 15,
                paddingRight: 15,
                borderRadius: 3,
              }}
              placeholder="Enter Last Name"
              value={this.state.body}
              onChangeText={body => this.setState({ body })}
            />

            <TouchableOpacity onPress={this.addPost.bind(this)}>
              <Text
                style={{
                  backgroundColor: '#8052ff',
                  padding: 6,
                  borderRadius: 4,
                  color: '#ffffff',
                  textAlign: 'center',
                  margin: 10,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatview: {
    flex: 1,
    flexDirection: 'row',
    margin: 2,
    padding: 10,
  },
  title: {
    paddingBottom: 5,
    color: '#8052ff',
    fontSize: 18,
  },
  body: {
    fontSize: 15,
    paddingBottom: 15,
    color: '#646464',
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1,
  },
});
