import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Alert, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import HomeComponent from '../Components';
import { bindActionCreators } from "redux";
import {addItem, checkedTask} from "../Actions";

class HomeContainer extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
     <HomeComponent
        borderRed={this.props.borderRed}
        toDoItemList={this.props.toDoItemList}
        complatedList={this.props.complatedList}
        checkedTask={this.props.checkedTask}
        addItem={this.props.addItem}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  borderRed: state.borderRed,
  toDoItemList: state.toDoItemList,
  complatedList: state.complatedList,
});

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch({type: "COUNTER_INCREMENT"}),
//   decrement: () => dispatch({type: "COUNTER_DECREMENT"}),
//   addItem: () => dispatch({type: "ADD_ITEM", payload: "dsfa",}),
// });


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addItem,
    checkedTask,
  }, dispatch)
);


export default connect(mapStateToProps, {addItem, checkedTask})(HomeContainer);
