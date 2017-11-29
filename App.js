import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
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
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
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
