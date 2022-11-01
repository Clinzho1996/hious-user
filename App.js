/* eslint-disable quotes */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import VendorStack from './navigations/VendorStack';
import AppStack from './navigations/AppStack';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <PaperProvider>
        <NavigationContainer>
          <VendorStack />
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
