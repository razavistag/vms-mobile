import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  // AsyncStorage,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Avatar} from 'react-native-elements';
import http from '../helpers/httpService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'percival.ratke@example.org',
      passwrod: 'password',

      token: '',
    };
  }

  submitLogin = () => {
    let form = {
      email: this.state.email,
      password: this.state.passwrod,
    };

    http
      .post(`/login`, form)
      .then(res => {
        AsyncStorage.setItem('token', res.data.access_token);
        AsyncStorage.getItem(
          'token',
          this.setState({token: res.data.access_token}),
        );

        console.log('logged in success');
        console.log(AsyncStorage.getItem('token'));
      })
      .catch(e => {
        console.log(e, 'PLEASE TRY AGAIN LATER');
      });

    // axios.post(`http://10.0.2.2:8000/login`, form).then(res => {
    //   // console.log(res.data);
    //   this.setState({token: res.data.access_token});
    //   console.log(this.state.token);
    // });

    console.log('submit triggered');
    console.log('Login Auth', form);
  };
  getData = () => {
    http
      .get('task')
      .then(res => {
        console.log(res.data);
      })
      .catch(ca => {
        console.log(ca, 'error');
      });
  };

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
            <Button
              icon={{
                name: 'login',
                size: 15,
                color: 'white',
              }}
              title="get data"
              onPress={this.getData}
            />
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
              {/* <Text>{this.state.email}</Text> */}

              <Input
                style={{
                  // backgroundColor: 'red',
                  padding: 0,
                  paddingLeft: 10,
                  margin: 0,
                }}
                onChangeText={e => this.setState({email: e})}
                value={this.state.email}
                leftIcon={<Icon name="envelope" size={15} color="gray" />}
                placeholder="Enter your email ..."
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {/* <Text>{this.state.passwrod}</Text> */}
              <Input
                style={{
                  // backgroundColor: 'red',
                  padding: 0,
                  paddingLeft: 10,
                  margin: 0,
                }}
                onChangeText={e => this.setState({passwrod: e})}
                value={this.state.passwrod}
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
                onPress={this.submitLogin}
              />

              <Text selectable>{this.state.token}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}

export default Login;
