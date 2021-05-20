import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import http from '../helpers/httpService';
import AsyncStorage from '@react-native-community/async-storage';

class DashboardHeader extends Component {
  constructor(props) {
    super(props);
    console.log('props from d header', props);
  }
  // Logout Function
  logout = async () => {
    console.log('logout triggered');
    AsyncStorage.getItem('token').then(value => {
      console.log('token from logout', value);
    });
    http
      .get(`logout`)
      .then(res => {
        console.log(res.data);
        console.log('logged out from response');
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('user_id');
        AsyncStorage.removeItem('user_name');
        AsyncStorage.removeItem('user_phone');
        this.props.navRouter.navigation.navigate('Home');
      })
      .catch(e => {
        console.log(e, 'PLEASE TRY AGAIN LATER');
      });
  };
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
          backgroundColor: '#26A69A',
          height: 40,
        }}>
        <Icon
          name="menu"
          style={{marginLeft: 20}}
          color="#fff"
          size={15}
          onPress={() => {
            this.props.navRouter.navigation.openDrawer();
          }}></Icon>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
          }}>
          DASHBOARD
        </Text>
        <Icon
          name="log-out"
          style={{marginLeft: 20}}
          color="#fff"
          size={15}
          onPress={this.logout}></Icon>
      </View>
    );
  }
}

export default DashboardHeader;
