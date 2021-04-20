import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Input, Button, Avatar, Overlay, ListItem} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

import Appbar from '../components/Appbar';
import http from '../helpers/httpService';
import {TouchableOpacity} from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.props.navigation.addListener('focus', () => {
      console.log('mounting app');
      this.componentDidMount();
      this.state.overlyVisible = false;
    });
  }

  state = {
    token: '',

    currentUser_id: '',
    currentUser_name: '',
    currentUser_phone: '',

    overlyVisible: false,

    headerMenu: [
      {
        title: 'Dashboard',
        icon: 'list',
      },
      {
        title: 'Logout',
        icon: 'dot-circle-o',
      },
    ],
  };

  componentDidMount() {
    console.log('did mounted');

    AsyncStorage.getItem('token').then(i => {
      console.log('token from mounted', i);
      this.setState({token: i});
    });

    AsyncStorage.getItem('user_name').then(i => {
      console.log(i);
      this.setState({currentUser_name: i});
    });
  }

  // React state update on an unmounted component.
  // This is a no-op, but it indicates a memory leak in your application.
  // To fix, cancel all subscriptions and asynchronous tasks in
  // the componentWillUnmount method
  componentWillUnmount() {
    this.componentDidMount();
  }

  dashboard = () => {
    console.log('das');
  };

  redrirect = i => {
    console.log(i);
    if (i == 'Dashboard') {
      this.props.navigation.navigate('Login');
    }
    if (i == 'Logout') {
      this.logout();
    }
  };

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
        this.componentWillUnmount();
      })
      .catch(e => {
        console.log(e, 'PLEASE TRY AGAIN LATER');
      });
  };
  render() {
    return (
      <>
        <Appbar />
        <View style={styles.titleHeader}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              // backgroundColor: 'red',
              // height:400
            }}>
            {/* <Button
              icon="home"
              onPress={() => console.log('Pressed')}></Button>
              */}
            {/* <Button
              icon="logout"
              onPress={() => navigation.navigate('Login')}>
              Login
            </Button>  */}

            <Button
              buttonStyle={{
                padding: 0,
                paddingLeft: 10,
                paddingRight: 10,
              }}
              icon={
                <Avatar
                  rounded
                  icon={{name: 'home', size: 20, color: '#3498db'}}
                  containerStyle={{backgroundColor: '#fff'}}
                />
              }
              title=""
              type="clear"
            />

            {/* {this.state.token ? (
              <Text>logged in</Text>
            ) : (
              <Text>No Users Logged-in</Text>
            )} */}

            {this.state.token ? (
              <>
                {/* <Button
                  buttonStyle={{
                    padding: 0,
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                  title="Logout"
                  titleStyle={{color: '#3498db'}}
                  type="clear"
                  onPress={this.logout}
                /> */}

                <Avatar
                  size="small"
                  rounded
                  overlayContainerStyle={{backgroundColor: 'blue'}}
                  icon={{name: 'list', type: 'font-awesome'}}
                  onPress={() => {
                    this.setState({overlyVisible: true});
                  }}
                />
                <Overlay
                  isVisible={this.state.overlyVisible == true}
                  overlayStyle={{padding: 0}}>
                  <View
                    style={{
                      width: 300,
                      padding: 0,
                    }}>
                    {/* overly Header */}
                    <View
                      style={{
                        backgroundColor: '#26A69A',
                        paddingVertical: 10,
                        paddingHorizontal: 7,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      {this.state.currentUser_nam ? null : (
                        <Text style={{color: '#fff'}}>
                          Hello {this.state.currentUser_name} !
                        </Text>
                      )}
                      <Icon
                        name="close"
                        color="white"
                        onPress={() => {
                          this.setState({overlyVisible: false});
                        }}
                      />
                    </View>
                    <View
                      style={
                        {
                          // backgroundColor: 'red',
                        }
                      }>
                      {this.state.headerMenu.map((i, k) => (
                        <ListItem
                          key={k}
                          bottomDivider
                          Component={TouchableOpacity}
                          onPress={() => this.redrirect(i.title)}>
                          <Icon name={i.icon} color="#26A69A" />
                          <ListItem.Content>
                            <ListItem.Title>{i.title}</ListItem.Title>
                          </ListItem.Content>
                          <ListItem.Chevron />
                        </ListItem>
                      ))}
                    </View>
                  </View>
                </Overlay>
              </>
            ) : (
              <Button
                buttonStyle={{
                  padding: 0,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
                icon={
                  <Avatar
                    rounded
                    icon={{name: 'login', size: 20, color: '#3498db'}}
                    containerStyle={{backgroundColor: '#fff'}}
                  />
                }
                title="Login"
                titleStyle={{color: '#3498db'}}
                type="clear"
                onPress={() => this.props.navigation.navigate('Login')}
              />
            )}
          </View>
        </View>
        {this.state.token ? (
          <Text selectable style={{paddingHorizontal: 15}}>
            {this.state.token}
          </Text>
        ) : null}
      </>
    );
  }
}
const styles = StyleSheet.create({
  titleHeader: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    height: 56,
    // backgroundColor: 'blue',
    // borderColor: 'red',
    // borderWidth: 1,
  },
});
export default HomeScreen;
