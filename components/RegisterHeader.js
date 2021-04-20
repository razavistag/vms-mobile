import React, {Component} from 'react';
import {Text, View} from 'react-native';

class RegisterHeader extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          //   backgroundColor: 'red',
        }}>
        <Text
          style={{
            color: '#fff', 
            fontWeight: 'bold',
          }}>
          Register
        </Text>
      </View>
    );
  }
}

export default RegisterHeader;
