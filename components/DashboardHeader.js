import React, {Component} from 'react';
import {TouchableOpacity, DrawerLayoutAndroid} from 'react-native';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class RegisterHeader extends Component {
  constructor(props) {
    super(props);
    console.log('props from d header', props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          //   backgroundColor: 'red',
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
          }}>
          DASHBOARD
        </Text>
      </View>
    );
  }
}

export default RegisterHeader;
