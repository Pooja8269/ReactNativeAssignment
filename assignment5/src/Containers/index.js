import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Alert, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import HomeComponent from '../Components';
import { bindActionCreators } from "redux";
import {addItem, checkedTask, removeTask} from "../Actions";

class HomeContainer extends Component{
  render(){
    return(
     <HomeComponent
        toDoItemList={this.props.toDoItemList}
        complatedList={this.props.complatedList}
        pendingCount={this.props.pendingCount}
        totalCount={this.props.totalCount}
        checkedTask={this.props.checkedTask}
        addItem={this.props.addItem}
        removeTask={this.props.removeTask}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  toDoItemList: state.toDoItemList,
  complatedList: state.complatedList,
  totalCount: state.totalCount,
  pendingCount: state.pendingCount,
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
    removeTask,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
