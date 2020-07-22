import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LogIn from './src/components/LogIn/LogIn';
import Registrattion from './src/components/Registration/Registration';
import {color} from 'react-native-reanimated';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Registration"
        screenOptions={{headerTitleStyle: {fontSize: 17}}}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Registration" component={Registrattion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
