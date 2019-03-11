
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import HomeContainer from './src/Containers';
import AppReducer from './src/Reducers';


const store = createStore(AppReducer);

export default class App extends Component {

  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <Provider store = {store}>
        <HomeContainer />
      </Provider>
    );
  }
}