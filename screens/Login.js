import React, {Component, createRef} from 'react';
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
import ValidationComponent from 'react-native-form-validator';

class Login extends ValidationComponent {
  constructor(props) {
    super(props);

    this.refUse = {
      ref_input_password: createRef(),
    };

    this.state = {
      email: 'percival.ratke@example.org',
      passwrod: 'password',

      // email: '',
      // password: '',

      token: '',
    };
  }

  submitLogin = async () => {
    this.validate({
      email: {email: true, required: true},
      password: {required: true},
    });
    let form = {
      email: this.state.email,
      password: this.state.password,
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
                  paddingVertical: 20,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'gray'}}>
                  LOGIN YOUR ACCOUNT
                </Text>
              </View>

              <View
                style={{
                  height: 45,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                }}>
                <Input
                  style={{
                    // backgroundColor: 'red',
                    padding: 0,
                    paddingLeft: 10,
                    margin: 0,
                  }}
                  onChangeText={e =>
                    this.setState({email: e}, () => {
                      this.validate({
                        email: {required: true, email: true},
                      });
                    })
                  }
                  value={this.state.email}
                  leftIcon={<Icon name="envelope" size={15} color="gray" />}
                  placeholder="Email ..."
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    this.refUse.ref_input_password.current.focus()
                  }
                />
              </View>
              <View style={styles.errorView}>
                {this.isFieldInError('email') &&
                  this.getErrorsInField('email').map((e, i) => (
                    <Text style={{color: 'red'}} key={i}>
                      {e}
                    </Text>
                  ))}
              </View>
              <View
                style={{
                  height: 45,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                }}>
                <Input
                  style={{
                    // backgroundColor: 'green',
                    padding: 0,
                    paddingLeft: 10,
                    margin: 0,
                  }}
                  onChangeText={e =>
                    this.setState({password: e}, () => {
                      this.validate({
                        email: {required: true, email: true},
                      });
                    })
                  }
                  value={this.state.password}
                  leftIcon={<Icon name="lock" size={15} color="gray" />}
                  placeholder="Password ..."
                  autoCapitalize="none"
                  secureTextEntry={true}
                  ref={this.refUse.ref_input_password}
                />
              </View>

              <View style={styles.errorView}>
                {this.isFieldInError('password') &&
                  this.getErrorsInField('password').map((e, i) => (
                    <Text style={{color: 'red'}} key={i}>
                      {e}
                    </Text>
                  ))}
              </View>

              <View
                style={{
                  // backgroundColor: 'red',
                  marginTop: 8,
                  marginVertical: 10,
                  paddingHorizontal: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    color: 'gray',
                  }}>
                  Create a new account
                </Text>
                <TouchableOpacity>
                  <Text
                    style={{
                      color: '#26A69A',
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
                buttonStyle={{
                  backgroundColor: '#26A69A',
                }}
              />

              <Text selectable>{this.state.token}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </>
    );
  }
}
const styles = StyleSheet.create({
  errorView: {
    top: 1,
    paddingLeft: 13,
    marginBottom: 5,
  },
});
export default Login;
