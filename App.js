/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import HomeScreen from './src/components/HomeScreen';
import GameScreen from './src/components/GameScreen';
import EndScreen from './src/components/EndScreen';

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
      <RootStack />
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
