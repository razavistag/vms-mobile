import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Text, View} from 'react-native';
import { colors } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Sidebar({...props}) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="a"
        icon={(size, colors)=>{
            <Icon name="home" size={size? 10: 10} colors={colors? 'red':'blue'}></Icon>
        }}
        // icon={{name: 'list', type: 'font-awesome'}}
        onPress={() => {
          props.navigation.navigate('Login');
        }}>
        <Text>Helo</Text>
      </DrawerItem>
    </DrawerContentScrollView>
  );
}
