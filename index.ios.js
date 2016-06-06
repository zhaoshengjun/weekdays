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
  View
} from 'react-native';
import DayItem from './src/day-item';

const DAYS = ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'];

class WeekDays extends Component {  
  days() {
    return DAYS.map((day) => <DayItem day={day} key={day}/> );    
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Days of the week
        </Text>
        {this.days()}
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

AppRegistry.registerComponent('WeekDays', () => WeekDays);
