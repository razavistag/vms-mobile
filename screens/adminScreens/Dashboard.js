import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Dashboard extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
       
        <Text>Dashboard Screen</Text>
      </View>
    );
  }
}

export default Dashboard;
