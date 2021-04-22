import * as React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import LoginHeader from './components/LoginHeader';
import RegisterHeader from './components/RegisterHeader';
import DashboardHeader from './components/DashboardHeader';

import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';

import DashboardScreen from './screens/adminScreens/Dashboard';

import http from './helpers/httpService';
import Sidebar from './components/CustomSidebar';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      initialRouteName={DashboardScreen}
      drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
        }}
      />
      <Drawer.Screen
        name="sd"
        component={DashboardScreen}
        options={{
          title: 'sd',
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
    </Drawer.Navigator>
  );
};

function App({navigation}) {
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
            name="onPress={() => this.props.navigation.navigate('Login')"
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
            component={DrawerRoutes}
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
                  size={15}
                  onPress={
                    props => console.log(navigation)
                    // props.navigation.dispatch(DrawerActions.openDrawer())
                  }></Icon>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
