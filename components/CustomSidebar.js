import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';
import {colors} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

export default function Sidebar({...props}) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Dashboard"
        icon={({color, size}) => (
          <Icon
            name="command"
            style={{fontSize: size ? 12 : 10, color: color}}
          />
        )}
        onPress={() => {
          props.navigation.navigate('DashboardScreen');
        }}></DrawerItem>
      <DrawerItem
        label="Projects"
        icon={({color, size}) => (
          <Icon name="code" style={{fontSize: size ? 12 : 10, color: color}} />
        )}
        onPress={() => {
          //   props.navigation.navigate('Login');
        }}></DrawerItem>
      <DrawerItem
        label="Systems"
        icon={({color, size}) => (
          <Icon name="grid" style={{fontSize: size ? 12 : 10, color: color}} />
        )}
        onPress={() => {
          //   props.navigation.navigate('Login');
        }}></DrawerItem>
      <DrawerItem
        label="Tasks"
        icon={({color, size}) => (
          <Icon
            name="layers"
            style={{fontSize: size ? 12 : 10, color: color}}
          />
        )}
        onPress={() => {
          //   props.navigation.navigate('Login');
        }}></DrawerItem>
      <DrawerItem
        label="Users"
        icon={({color, size}) => (
          <Icon name="user" style={{fontSize: size ? 12 : 10, color: color}} />
        )}
        onPress={() => {
          //   props.navigation.navigate('Login');
        }}></DrawerItem>
      <DrawerItem
        label="Exit"
        icon={({color, size}) => (
          <Icon name="x" style={{fontSize: size ? 12 : 10, color: color}} />
        )}
        onPress={() => {
            props.navigation.navigate('Home');
        }}></DrawerItem>
    </DrawerContentScrollView>
  );
}
