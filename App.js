import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen';
import RegistrationScreen from './src/screens/registration';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Registration"
        screenOptions={{ headerTitleStyle: { fontSize: 17 } }}>
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
