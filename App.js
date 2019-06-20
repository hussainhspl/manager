/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import firebase from 'firebase';
import * as firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
// import { Header } from './src/common';
import Router from './Router';
// import LoginForm from './src/LoginForm';
// import console = require('console');

type Props = {};
export default class App extends Component<Props> {
  conmponentDidMount() {
    // console.log('component did mount');
    // const config = {
    //   apiKey: 'AIzaSyDHQ0y_KgrFMFFMUY3SGevwvFe-lBXfYL8',
    //   authDomain: 'manager-de40a.firebaseapp.com',
    //   databaseURL: 'https://manager-de40a.firebaseio.com',
    //   projectId: 'manager-de40a',
    //   storageBucket: 'manager-de40a.appspot.com',
    //   messagingSenderId: '392996157681',
    //   appId: '1:392996157681:web:bde63c1a13b0c2c6'
    // };
    // const app1 = firebase.initializeApp(config);
  }
  render() {
    const config = {
      apiKey: 'AIzaSyDHQ0y_KgrFMFFMUY3SGevwvFe-lBXfYL8',
      authDomain: 'manager-de40a.firebaseapp.com',
      databaseURL: 'https://manager-de40a.firebaseio.com',
      projectId: 'manager-de40a',
      storageBucket: 'manager-de40a.appspot.com',
      messagingSenderId: '392996157681',
      appId: '1:392996157681:web:bde63c1a13b0c2c6'
    };
    firebase.initializeApp(config);
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <View style={{ flex: 1, backgroundColor: '#f00' }}>
            {/* <Header headerName="manager" /> */}
            {/* <LoginForm /> */}
            <Router />
          </View>
        </SafeAreaView>
      </Provider>
    );
  }
}
