
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import CounterComponent from './src/Containers/index';
import CounterReducer from './src/Reducers/CounterReducer'


const store = createStore(CounterReducer);

export default class App extends Component {

  constructor(props){
    super(props)
    }
  
  render() {
    return (
      <Provider store = {store}>
        <CounterComponent />
      </Provider>
    );
  }
}