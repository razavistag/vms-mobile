import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';

import Appbar from './components/Appbar';

const App = () => {
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
          }}>
          {/* <Button title="VISTA MANAGMENT SYSTEM"></Button> */}
          <Button
            icon="home"
            mode="text"
            onPress={() => console.log('Pressed')}>
            VMS
          </Button>
          <Button
            icon="logout"
            mode="text"
            onPress={() => console.log('Pressed')}>
            Login
          </Button>
          {/* <Button title="VMS"></Button>
          <Button title="Login"></Button> */}
        </View>
      </View>
    </>
  );
};

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

export default App;
