import * as React from 'react';
import {Appbar, Button} from 'react-native-paper';
import {Text, StyleSheet, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const MyComponent = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.AppbarHeader}>
      <View style={styles.HeaderView}>
        <Text style={styles.HeaderText}>
          <Icon name="history" color="#fff" size={13} />
          <Text> Mon - Fri 8.00 - 18.00</Text>
        </Text>

        <Text style={styles.HeaderText}>
          <Icon name="phone" color="#fff" size={13} />
          <Text> +94 777-123-456</Text>
        </Text>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  AppbarHeader: {
    height: 40,
    backgroundColor: '#26A69A',
  },
  HeaderView: {
    paddingHorizontal: 5,
    flex: 1,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HeaderText: {
    color: 'white',
  },
});

export default MyComponent;
