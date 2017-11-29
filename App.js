import React, { Component } from 'react';
//import AsyncStorage from 'react-native';
//import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
//import uniqueId from 'react-native-unique-id';
import reducers from './src/reducers';
//import { CardSection } from './src/components/common';
import Router from './src/Router';


class App extends Component {
 
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDDwlJMAIzKAEEcdWz22mnmh2qqhHZwJis',
      authDomain: 'cardiary-feab7.firebaseapp.com',
      databaseURL: 'https://cardiary-feab7.firebaseio.com',
      projectId: 'cardiary-feab7',
      storageBucket: '',
      messagingSenderId: '360464485470'
    };
    firebase.initializeApp(config);
    firebase.auth().signInAnonymously().catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ...
    });     
    }

  render() {   
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }

  
}


export default App;
