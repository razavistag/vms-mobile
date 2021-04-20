import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Avatar, Overlay, ListItem} from 'react-native-elements';

import http from '../helpers/httpService';
import {TextInput} from 'react-native';
import {ScrollView} from 'react-native';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.props.navigation.addListener('focus', () => {
      console.log('mounting app');
      this.componentDidMount();
    });
  }

  state = {
    token: '',
  };

  componentDidMount() {
    console.log('did mounted');
  }

  componentWillUnmount() {
    this.componentDidMount();
  }

  // Logout Function
  functionName = () => {};
  render() {
    return (
      <>
        <ScrollView style={styles.scrollView}>
          <KeyboardAvoidingView
            style={styles.KeyboardAvoidingView}
            behavior="position">
            <View style={styles.containerwrap}>
              <View
                style={{
                  //   backgroundColor: 'red',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'gray'}}>
                  CREATE A NEW ACCOUNT
                </Text>
              </View>
              <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                accessible={false}>
                <View
                  style={{
                    //   backgroundColor: 'red',
                    paddingVertical: 10,
                  }}>
                  {/* NAME */}
                  <Input
                    style={{
                      // backgroundColor: 'red',
                      paddingLeft: 10,
                      margin: 0,
                    }}
                    leftIcon={<Icon name="user" size={15} color="gray" />}
                    placeholder="User name"
                  />
                  {/* COMPANY NAME */}
                  <Input
                    style={{
                      // backgroundColor: 'red',
                      paddingLeft: 10,
                      margin: 0,
                    }}
                    leftIcon={<Icon name="building" size={15} color="gray" />}
                    placeholder="Company name"
                  />
                  {/* COMPANY NAME */}
                  <Input
                    style={{
                      // backgroundColor: 'red',
                      paddingLeft: 10,
                      margin: 0,
                    }}
                    leftIcon={<Icon name="envelope" size={15} color="gray" />}
                    placeholder="Email"
                    keyboardType="email-address"
                  />

                  {/* PHONE */}
                  <Input
                    style={{
                      // backgroundColor: 'red',
                      paddingLeft: 10,
                      margin: 0,
                    }}
                    leftIcon={<Icon name="phone" size={15} color="gray" />}
                    placeholder="Phone"
                    keyboardType="phone-pad"
                  />
                  {/* NIC */}
                  <Input
                    style={{
                      // backgroundColor: 'red',
                      paddingLeft: 10,
                      margin: 0,
                    }}
                    leftIcon={<Icon name="id-card" size={15} color="gray" />}
                    placeholder="NIC"
                  />
                  {/* NEED TO FIX */}
                  {/* GENDER */}
                  <Input
                    style={{
                      // backgroundColor: 'red',
                      paddingLeft: 10,
                      margin: 0,
                    }}
                    leftIcon={<Icon name="venus-mars" size={15} color="gray" />}
                    placeholder="GENDER need to be on select"
                  />
                  {/* ADDRESS */}
                  <Input
                    style={{
                      // backgroundColor: 'red',
                      paddingLeft: 10,
                      margin: 0,
                    }}
                    leftIcon={<Icon name="map-marker" size={15} color="gray" />}
                    placeholder="Address"
                    multiline
                    numberOfLines={2}
                  />
                  {/* Password */}
                  <Input
                    style={{
                      // backgroundColor: 'red',
                      paddingLeft: 10,
                      margin: 0,
                    }}
                    secureTextEntry={true}
                    leftIcon={<Icon name="lock" size={15} color="gray" />}
                    placeholder="Password"
                  />

                  <Button
                    title="REGISTER"
                    buttonStyle={{
                      backgroundColor: '#26A69A',
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  KeyboardAvoidingView: {
    // backgroundColor: '#ff343f',
    // flex: 1,
  },
  containerwrap: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    // height: 56,
    flex: 1,

    // backgroundColor: 'red',
  },
  container: {
    flex: 1,
    paddingTop: 5,
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
  },
});
export default RegisterScreen;
