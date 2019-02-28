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

const {height, width} = Dimensions.get('window');

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      isLoading: true
    };
  }
  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ dataArray: responseJson, isLoading: false });
        ToastAndroid.show("Data fetched", ToastAndroid.SHORT, 10);
        //   alert(JSON.stringify(dataArray[0].id));
      });
  }
  getFirstLatter(empName){
    return empName.charAt(0).toUpperCase()
  }
  render() {
    return (
      <View style={{ margin: 5}}>
        {this.state.isLoading == true && (
          <ActivityIndicator
            style={{ marginVertical: 100 }}
            size="large"
            color="#00ff00"
          />
        )}
        {this.state.isLoading == false && (
          <FlatList
            data={this.state.dataArray}
            renderItem={({ item }) => (
              <View style={styles.flatview}>
              { item.employee_name == '' && (
                <Image style={{width: 60, height: 55, marginRight: 10}}
                  source={{uri: 'https://www.freeiconspng.com/uploads/profile-icon-9.png'}} />
              )}
              { item.employee_name != '' && (
                  <Text style={{marginTop:5, width: 60, height: 60, backgroundColor:'#eeeeee', marginRight: 10, borderRadius: 60, fontSize: 30, padding:10, textAlign:'center'}}>{this.getFirstLatter(item.employee_name)}</Text>
              )}
                <View style={{width: width-130, flexDirection: 'column'}}>
                  <Text style={styles.item}>{item.employee_name}</Text>
                  <Text style={styles.item}>{item.employee_age}</Text>
                </View>
                 { item.employee_name == '' && (
                  <Text style={{marginTop:25, width: 12, height: 12, backgroundColor:'red', marginRight: 10, borderRadius: 20}} />
                 )}
                  { item.employee_name != '' && (
                  <Text style={{marginTop:25, width: 12, height: 12, backgroundColor:'green', marginRight: 10, borderRadius: 20}} />
                 )}

              </View>
            )}
          />
        )}      
      </View>
    );
  }
}


const styles = StyleSheet.create({

  flatview: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    margin:2,
    padding: 10,
  },
  item: {
    padding:3,
    fontSize: 18,
  }
});