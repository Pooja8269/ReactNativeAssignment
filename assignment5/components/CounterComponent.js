import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Alert, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Sample from '../src/Components/index';

class CounterComponent extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
     <Sample
        counter={this.props.count}
        increment={this.props.increment}
        decrement={this.props.decrement}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({type: "COUNTER_INCREMENT"}),
  decrement: () => dispatch({type: "COUNTER_DECREMENT"}),
});

// export const incrementCounter = () => ({
//     type: "COUNTER_INCREMENT"
// });

// export const decrementCounter = () => ({
//     type: "COUNTER_DECREMENT"
// });

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
