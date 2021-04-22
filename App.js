import * as React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginHeader from './components/LoginHeader';
import RegisterHeader from './components/RegisterHeader';
import DashboardHeader from './components/DashboardHeader';

import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

import DashboardScreen from './screens/adminScreens/Dashboard';

import http from './helpers/httpService';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#80CBC4" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',
              headerTitle: props => <LoginHeader />,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#26A69A',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              title: 'Register',
              headerTitle: props => <RegisterHeader />,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#26A69A',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen}
            options={{
              title: 'Dashboard',
              headerTitle: props => <DashboardHeader />,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#26A69A',
              },
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerLeft: () => (
                <Icon
                  name="bars"
                  style={{marginLeft: 20}}
                  color="#fff"
                  size={15}></Icon>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
