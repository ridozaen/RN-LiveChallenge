/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import HomeScreen from './src/components/HomeScreen';
import GameScreen from './src/components/GameScreen';
import EndScreen from './src/components/EndScreen';
import { Provider } from 'react-redux'
import store from './src/store'

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Game: GameScreen,
  End: EndScreen
},
  {
    initialRouteName: 'Home'
  })


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
