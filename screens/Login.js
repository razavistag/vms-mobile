import React, {Component} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  // AsyncStorage,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Avatar} from 'react-native-elements';
import http from '../helpers/httpService';
import {TouchableOpacity} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'percival.ratke@example.org',
      passwrod: 'password',

      token: '',
    };
  }

  submitLogin = async () => {
    let form = {
      email: this.state.email,
      password: this.state.passwrod,
    };

    http
      .post(`/login`, form)
      .then(res => {
        AsyncStorage.setItem('token', res.data.access_token);

        AsyncStorage.setItem(
          'user_id',
          res.data.user_information.id.toString(),
        );
        AsyncStorage.setItem('user_name', res.data.user_information.name);
        AsyncStorage.setItem('user_phone', res.data.user_information.phone);

        this.setState({token: res.data.access_token}),
          console.log('logged in success');
        console.log(res.data.user_information);

        AsyncStorage.getItem('token').then(value => {
          console.log('token from login ', value);
        });
      })
      .catch(e => {
        console.log(e, 'PLEASE TRY AGAIN LATER');
      });

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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor:'blue'
            }}>
            {/* <Button
              icon={{
                name: 'login',
                size: 15,
                color: 'white',
              }}
              title="get data"
              onPress={this.getData}
            /> */}
            <View
              style={{
                // backgroundColor: 'red',
                width: '90%',
              }}>
              <View
                style={{
                  //   backgroundColor: 'red',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  paddingVertical:20
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'gray'}}>
                  LOGIN YOUR ACCOUNT
                </Text>
              </View>

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
                  // backgroundColor: 'green',
                  padding: 0,
                  paddingLeft: 10,
                  margin: 0,
                }}
                onChangeText={e => this.setState({passwrod: e})}
                value={this.state.passwrod}
                leftIcon={<Icon name="lock" size={15} color="gray" />}
                placeholder="password"
                autoCapitalize="none"
                secureTextEntry={true}
              />

              <View
                style={{
                  // backgroundColor: 'red',
                  marginTop: -20,
                  marginVertical: 10,
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>Create a new account</Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: 'blue',
                    }}
                    onPress={() => {
                      this.props.navigation.navigate('RegisterScreen');
                    }}>
                    SING UP
                  </Text>
                </TouchableOpacity>
              </View>

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
