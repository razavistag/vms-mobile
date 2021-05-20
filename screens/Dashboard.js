import React, {Component} from 'react';
import {View, Text} from 'react-native';
import DashboardHeader from '../components/DashboardHeader';
import Icon from 'react-native-vector-icons/Feather';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    console.log('props from dashboard', props);
  }
  render() {
    return (
      <>
        <DashboardHeader navRouter={this.props} />

        <View
          style={{
            flexDirection: 'row',
            height: 100,
            padding: 20,
          }}>
          <Text>Dashboard Screen</Text>
        </View>
      </>
    );
  }
}

export default Dashboard;
