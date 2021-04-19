import React, {Component} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';

import Appbar from '../components/Appbar';
import http from '../helpers/httpService';

class HomeScreen extends Component {
    // logout = ()=>{
    //     http
    //     .get(`/logout`)
    //     .then(res => {
         
  
    //       console.log('logged in success');
    //       console.log(AsyncStorage.getItem('token'));
    //     })
    //     .catch(e => {
    //       console.log(e, 'PLEASE TRY AGAIN LATER');
    //     });
  
    //     console.log(12)
    // }
  render() {
    return (
      <>
        <StatusBar backgroundColor="#80CBC4" />
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

{AsyncStorage.getItem('token') ? <Text>loged in</Text> : <Text>loged out</Text>}

              {AsyncStorage.getItem('token') ?  <Button
              buttonStyle={{
                padding: 0,
                paddingLeft: 10,
                paddingRight: 10,
              }}
             
              title="Logout"
              titleStyle={{color: '#3498db'}}
              type="clear"
              onPress={this.logout}
            />
        :
        
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
      }

            {/* <Button
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
            /> */}
          </View>
        </View>
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
