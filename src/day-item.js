import React, { Component} from 'react';
import { View,Text} from 'react-native';

class DayItem extends Component {

  render() {
    return (
      <Text>{this.props.day}</Text>
    )      
  }
}

export default DayItem;