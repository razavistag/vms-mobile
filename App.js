import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginHeader from './components/LoginHeader';

import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';

// function HomeScreen({navigation}) {
//   return (
//     <>
//       <StatusBar backgroundColor="#80CBC4" />
//       <Appbar />
//       <View style={styles.titleHeader}>
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'space-between',
//             flexDirection: 'row',
//             // backgroundColor: 'red',
//             // height:400
//           }}>
//           {/* <Button
//             icon="home"
//             onPress={() => console.log('Pressed')}></Button>
//             */}
//           {/* <Button
//             icon="logout"
//             onPress={() => navigation.navigate('Login')}>
//             Login
//           </Button>  */}

//           <Button
//             buttonStyle={{
//               padding: 0,
//               paddingLeft: 10,
//               paddingRight: 10,
//             }}
//             icon={
//               <Avatar
//                 rounded
//                 icon={{name: 'home', size: 20, color: '#3498db'}}
//                 containerStyle={{backgroundColor: '#fff'}}
//               />
//             }
//             title=""
//             type="clear"
//           />

//           <Button
//             buttonStyle={{
//               padding: 0,
//               paddingLeft: 10,
//               paddingRight: 10,
//             }}
//             icon={
//               <Avatar
//                 rounded
//                 icon={{name: 'login', size: 20, color: '#3498db'}}
//                 containerStyle={{backgroundColor: '#fff'}}
//               />
//             }
//             title="Login"
//             titleStyle={{color: '#3498db'}}
//             type="clear"
//             onPress={() => navigation.navigate('Login')}
//           />
//         </View>
//       </View>
//     </>
//   );
// }

// function Login({navigation}) {
//   return (
//     <>
//       <StatusBar backgroundColor="#80CBC4" />
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             // backgroundColor:'blue'
//           }}>
//           <View
//             style={{
//               // backgroundColor: 'red',
//               width: '90%',
//             }}>
//             <Text
//               style={{
//                 paddingHorizontal: 120,
//                 fontWeight: '500',
//               }}>
//               ACCOUNT LOGIN
//             </Text>

//             <Input
//               style={{
//                 // backgroundColor: 'red',
//                 padding: 0,
//                 paddingLeft: 10,
//                 margin: 0,
//               }}
//               leftIcon={<Icon name="envelope" size={15} color="gray" />}
//               placeholder="Enter your email ..."
//               keyboardType="email-address"
//               autoCapitalize="none"
//             />

//             <Input
//               style={{
//                 // backgroundColor: 'red',
//                 padding: 0,
//                 paddingLeft: 10,
//                 margin: 0,
//               }}
//               leftIcon={<Icon name="user" size={15} color="gray" />}
//               placeholder="password"
//               autoCapitalize="none"
//               secureTextEntry={true}
//             />

//             <Button
//               icon={{
//                 name: 'login',
//                 size: 15,
//                 color: 'white',
//               }}
//               title="LOGIN"
//             />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   titleHeader: {
//     paddingHorizontal: 24,
//     paddingVertical: 10,
//     height: 56,
//     // backgroundColor: 'blue',
//     // borderColor: 'red',
//     // borderWidth: 1,
//   },
// });

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
