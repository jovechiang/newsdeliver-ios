/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';


export default class newsdelivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
        movies: {},
        text: ' ',
    }
  }

  render() {
    return (
      <View style={{padding: 50}}>
        <TextInput
          style={{height: 80}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text:text, movies:{}})}
        />
        <Text> {this.state.text} </Text>
        </View>
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

AppRegistry.registerComponent('newsdelivery', () => newsdelivery);
