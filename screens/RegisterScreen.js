import React, {Component, createRef} from 'react';
import http from '../helpers/httpService';

import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Input,
  Button,
  Avatar,
  Overlay,
  ListItem,
  colors,
} from 'react-native-elements';

import {TextInput} from 'react-native';
import {ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ValidationComponent from 'react-native-form-validator';
class RegisterScreen extends ValidationComponent {
  constructor(props) {
    super(props);

    this.refUse = {
      ref_input_userName: createRef(),
      ref_input_company: createRef(),
      ref_input_email: createRef(),
      ref_input_phone: createRef(),
      ref_input_nic: createRef(),
      ref_input_gender: createRef(),
      ref_input_address: createRef(),
      ref_input_password: createRef(),
    };

    this.props.navigation.addListener('focus', () => {
      console.log('mounting app');
      this.componentDidMount();
    });
  }

  state = {
    token: '',
    userName: '',

    form: {
      userName: '',
      company: '',
      email: '',
      phone: '+94',
      nic: '',
      gender: '',
      address: '',
      password: '',
    },
  };

  componentDidMount() {
    console.log('did mounted');
    this.Toast('mounted');
  }

  componentWillUnmount() {
    this.componentDidMount();
  }

  Toast = msg => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };

  submitRegister = () => {
    if (
      this.validate({
        userName: {required: true},
        company: {required: true},
        email: {email: true, required: true},
        phone: {minlength: 9, maxlength: 15, required: true},
        nic: {required: true},
        gender: {required: true},
        address: {required: true},
        password: {required: true},
      })
    ) {
      this.Toast('true from submit');
    } else {
      this.Toast('false from submit');
    }
    // this.validate({
    //   userName: {required: true},
    //   company: {required: true},
    //   email: {email: true, required: true},
    //   phone: {minlength: 9, maxlength: 15, required: true},
    //   nic: {required: true, minlength: 3},
    //   gender: {required: true},
    //   address: {required: true},
    //   password: {required: true},
    // });
    // if (!this.isFormValid()) {
    //   this.Toast('Form not submited');
    //   return;
    // }

    this.Toast('success');
    console.log('register triggered');
    console.log('Register Form', this.state.form);
    let registerForm = {
      name: this.state.form.userName,
      company: this.state.form.company,
      email: this.state.form.email,
      phone: this.state.form.phone,
      nic: this.state.form.nic,
      gender: this.state.form.gender,
      address: this.state.form.address,
      password: this.state.form.password,
      passwordConfirm: this.state.form.password,
    };
    // http
    //   .post(`/register`, registerForm)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  };
  render() {
    return (
      <>
        <ScrollView style={styles.scrollView}>
          {/* <KeyboardAvoidingView
            style={styles.KeyboardAvoidingView}
            behavior="position"> */}
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
            {/* DISPLAY ALL ERRORS */}
            {/* <Text>{this.getErrorMessages()}</Text> */}
            <TouchableWithoutFeedback
              onPress={Keyboard.dismiss}
              accessible={false}>
              <View
                style={{
                  //   backgroundColor: 'red',
                  paddingVertical: 10,
                }}>
                <View
                  style={{
                    height: 45,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="user" size={15} color="gray" />
                  <Input
                    style={{
                      // backgroundColor: 'pink',
                      paddingLeft: 10,
                      padding: 0,
                      margin: 0,
                    }}
                    containerStyle={{
                      height: 40,
                    }}
                    onChangeText={e =>
                      this.setState(
                        Object.assign(this.state.form, {
                          userName: e.trimStart(),
                        }),
                        () => {
                          this.validate({
                            userName: {required: true, minlength: 3},
                          });
                        },
                      )
                    }
                    value={this.state.form.userName}
                    placeholder="User name"
                    ref={this.refUse.ref_input_userName}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      this.refUse.ref_input_company.current.focus()
                    }
                  />
                </View>
                <View style={styles.errorView}>
                  {this.isFieldInError('userName') &&
                    this.getErrorsInField('userName').map((e, i) => (
                      <Text style={{color: 'red'}} key={i}>
                        {e}
                      </Text>
                    ))}
                </View>

                {/* COMPANY NAME */}
                <View
                  style={{
                    height: 45,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="building" size={15} color="gray" />
                  <Input
                    style={{
                      // backgroundColor: 'pink',
                      paddingLeft: 10,
                      padding: 0,
                      margin: 0,
                    }}
                    containerStyle={{
                      height: 40,
                    }}
                    onChangeText={e =>
                      this.setState(
                        Object.assign(this.state.form, {
                          company: e.trimStart(),
                        }),
                        () => {
                          this.validate({
                            company: {required: true, minlength: 3},
                          });
                        },
                      )
                    }
                    value={this.state.form.company}
                    placeholder="Company name"
                    ref={this.refUse.ref_input_company}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      this.refUse.ref_input_email.current.focus()
                    }
                  />
                </View>
                <View style={styles.errorView}>
                  {this.isFieldInError('company') &&
                    this.getErrorsInField('company').map((e, i) => (
                      <Text style={{color: 'red'}} key={i}>
                        {e}
                      </Text>
                    ))}
                </View>

                {/* EMAIL */}
                <View
                  style={{
                    height: 45,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: 'red',
                  }}>
                  <Icon name="envelope" size={15} color="gray" />
                  <Input
                    style={{
                      // backgroundColor: 'pink',
                      paddingLeft: 10,
                      padding: 0,
                      margin: 0,
                    }}
                    containerStyle={{
                      height: 40,
                    }}
                    onChangeText={e =>
                      this.setState(
                        Object.assign(this.state.form, {
                          email: e.trimStart(),
                        }),
                        () => {
                          this.validate({
                            email: {required: true, email: true},
                          });
                        },
                      )
                    }
                    value={this.state.form.email}
                    placeholder="Email"
                    keyboardType="email-address"
                    ref={this.refUse.ref_input_email}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      this.refUse.ref_input_phone.current.focus()
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

                {/* PHONE */}
                <View
                  style={{
                    height: 45,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="phone" size={15} color="gray" />
                  <Input
                    style={{
                      // backgroundColor: 'pink',
                      paddingLeft: 10,
                      padding: 0,
                      margin: 0,
                    }}
                    containerStyle={{
                      height: 40,
                    }}
                    onChangeText={e =>
                      this.setState(
                        Object.assign(this.state.form, {
                          phone: e.trimStart(),
                        }),
                        () => {
                          this.validate({
                            phone: {
                              required: true,
                              minlength: 9,
                              maxlength: 15,
                            },
                          });
                        },
                      )
                    }
                    value={this.state.form.phone}
                    placeholder="Phone"
                    keyboardType="phone-pad"
                    ref={this.refUse.ref_input_phone}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      this.refUse.ref_input_nic.current.focus()
                    }
                  />
                </View>
                <View style={styles.errorView}>
                  {this.isFieldInError('phone') &&
                    this.getErrorsInField('phone').map((e, i) => (
                      <Text style={{color: 'red'}} key={i}>
                        {e}
                      </Text>
                    ))}
                </View>

                {/* NIC */}
                <View
                  style={{
                    height: 45,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: 'red',
                  }}>
                  <Icon name="id-card" size={15} color="gray" />
                  <Input
                    style={{
                      // backgroundColor: 'yellow',
                      paddingLeft: 10,
                      padding: 0,
                      margin: 0,
                    }}
                    containerStyle={{
                      height: 40,
                      // backgroundColor: 'pink',
                      padding: 0,
                      margin: 0,
                    }}
                    inputStyle={
                      {
                        // backgroundColor:'green'
                        // ,padding: 10,
                      }
                    }
                    onChangeText={e =>
                      this.setState(
                        Object.assign(this.state.form, {
                          nic: e.trimStart(),
                        }),
                        () => {
                          this.validate({
                            nic: {required: true, minlength: 3},
                          });
                        },
                      )
                    }
                    value={this.state.form.nic}
                    placeholder="NIC"
                    keyboardType="numbers-and-punctuation"
                    ref={this.refUse.ref_input_nic}
                  />
                </View>
                <View style={styles.errorView}>
                  {this.isFieldInError('nic') &&
                    this.getErrorsInField('nic').map((e, i) => (
                      <Text style={{color: 'red'}} key={i}>
                        {e}
                      </Text>
                    ))}
                </View>

                {/* GENDER */}
                <View
                  style={{
                    height: 45,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // backgroundColor: 'red',
                    marginTop: 8,
                  }}>
                  <Icon name="id-card" size={15} color="gray" />
                  <DropDownPicker
                    items={[
                      {
                        label: 'MALE',
                        value: 'MALE',
                      },
                      {
                        label: 'FEMALE',
                        value: 'FEMALE',
                      },
                      {
                        label: 'OTHERS',
                        value: 'OTHERS',
                      },
                    ]}
                    placeholder="GENDER"
                    containerStyle={{
                      height: 40,
                      width: '100%',
                      paddingHorizontal: 10,
                      // backgroundColor: 'red',
                    }}
                    style={{
                      backgroundColor: '#fff',
                      borderColor: '#fff',
                      borderBottomColor: 'black',
                      borderBottomStartRadius: 0,
                      borderBottomEndRadius: 0,
                    }}
                    globalTextStyle={{
                      color: 'gray',
                      padding: 0,
                      // backgroundColor: 'green',
                      marginLeft: 0,
                    }}
                    itemStyle={{
                      justifyContent: 'flex-start',
                    }}
                    placeholderStyle={{
                      // fontWeight: 'bold',
                      textAlign: 'left',
                      marginLeft: -3,
                      fontSize: 15,
                      // color: 'red',
                    }}
                    selectedLabelStyle={{
                      color: '#000',
                      marginLeft: -3,
                      fontSize: 15,
                    }}
                    activeItemStyle={{justifyContent: 'flex-start'}}
                    activeLabelStyle={{color: '#26A69A'}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    defaultValue={this.state.form.gender}
                    onChangeItem={e =>
                      this.setState(
                        Object.assign(this.state.form, {
                          gender: e.value,
                        }),
                        () => {
                          this.validate({
                            gender: {required: true},
                          });
                        },
                      )
                    }
                    ref={this.refUse.ref_input_gender}
                  />
                </View>
                <View style={styles.errorView}>
                  {this.isFieldInError('gender') &&
                    this.getErrorsInField('gender').map((e, i) => (
                      <Text style={{color: 'red'}} key={i}>
                        {e}
                      </Text>
                    ))}
                </View>

                {/* ADDRESS */}
                <View
                  style={{
                    height: 45,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <Icon name="map-marker" size={15} color="gray" />
                  <Input
                    style={{
                      // backgroundColor: 'pink',
                      paddingLeft: 10,
                      padding: 0,
                      margin: 0,
                    }}
                    containerStyle={{
                      height: 40,
                    }}
                    onChangeText={e =>
                      this.setState(
                        Object.assign(this.state.form, {
                          address: e.trimStart(),
                        }),
                        () => {
                          this.validate({
                            address: {required: true},
                          });
                        },
                      )
                    }
                    value={this.state.form.address}
                    placeholder="Address"
                    multiline
                    numberOfLines={2}
                    ref={this.refUse.ref_input_address}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      this.refUse.ref_input_password.current.focus()
                    }
                  />
                </View>
                <View style={styles.errorView}>
                  {this.isFieldInError('address') &&
                    this.getErrorsInField('address').map((e, i) => (
                      <Text style={{color: 'red'}} key={i}>
                        {e}
                      </Text>
                    ))}
                </View>
                {/* Password */}
                <View
                  style={{
                    height: 45,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon name="lock" size={15} color="gray" />
                  <Input
                    style={{
                      // backgroundColor: 'pink',
                      paddingLeft: 10,
                      padding: 0,
                      margin: 0,
                    }}
                    containerStyle={{
                      height: 40,
                    }}
                    onChangeText={e =>
                      this.setState(
                        Object.assign(this.state.form, {
                          password: e.trimStart(),
                        }),

                        () => {
                          this.validate({
                            password: {required: true, minlength: 6},
                          });
                        },
                      )
                    }
                    value={this.state.form.password}
                    placeholder="Password"
                    secureTextEntry={true}
                    ref={this.refUse.ref_input_password}
                    returnKeyType="done"
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

                {/* REGISTER BUTTON */}
                <View
                  style={{
                    height: 45,
                    marginTop: 20,
                  }}>
                  <Button
                    title="REGISTER"
                    buttonStyle={{
                      backgroundColor: '#26A69A',
                    }}
                    onPress={this.submitRegister}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          {/* </KeyboardAvoidingView> */}
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  KeyboardAvoidingView: {
    backgroundColor: '#ff343f',
    flex: 6,
  },
  containerwrap: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    // height: 56,
    // flex: 1,
    backgroundColor: '#fff',

    // backgroundColor: 'red',
  },
  container: {
    // flex: 1,
    paddingTop: 5,
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
    flex: 1,
  },
  errorView: {
    top: 1,
    paddingLeft: 13,
  },
});
export default RegisterScreen;
