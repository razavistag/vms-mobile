import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Avatar} from 'react-native-elements';

class Login extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#80CBC4" />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'blue'
            }}>
            <View
              style={{
                // backgroundColor: 'red',
                width: '90%',
              }}>
              <Text
                style={{
                  paddingHorizontal: 120,
                  fontWeight: '500',
                }}>
                ACCOUNT LOGIN
              </Text>

              <Input
                style={{
                  // backgroundColor: 'red',
                  padding: 0,
                  paddingLeft: 10,
                  margin: 0,
                }}
                leftIcon={<Icon name="envelope" size={15} color="gray" />}
                placeholder="Enter your email ..."
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <Input
                style={{
                  // backgroundColor: 'red',
                  padding: 0,
                  paddingLeft: 10,
                  margin: 0,
                }}
                leftIcon={<Icon name="user" size={15} color="gray" />}
                placeholder="password"
                autoCapitalize="none"
                secureTextEntry={true}
              />

              <Button
                icon={{
                  name: 'login',
                  size: 15,
                  color: 'white',
                }}
                title="LOGIN"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

export default Login;
