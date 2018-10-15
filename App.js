import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation'
import { Root } from 'native-base'
import Home from './src/routes/Home';

export default class App extends Component {
  render() {
    return (
      <Root style={styles.container}>
        <AppNavigation />
      </Root>
    );
  }
}

const AppNavigation = createDrawerNavigator({
  Home: {
    screen: Home
  }
})
