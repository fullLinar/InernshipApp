import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/loginScreen';
import RegistrationScreen from '../../screens/registrationScreen';
import { connect } from 'react-redux';
import { getAuth } from '../../selectors/selectors';
import myDeskScreen from '../../screens/myDeskScreen';

const Navigation = ({ isAuth }) => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Registration"
        screenOptions={{ headerTitleStyle: { fontSize: 17 } }}>
        {!isAuth ? (
          <>
            <Stack.Screen name="LogIn" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        ) : (
          <Stack.Screen name="My Desk" component={myDeskScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: getAuth(state),
  };
};
export default connect(mapStateToProps)(Navigation);
