import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/loginScreen';
import RegistrationScreen from '../../screens/RegistrationScreen';
import { connect } from 'react-redux';
import { getAuth } from '../../selectors/selectors';
import myDeskScreen from '../../screens/MyDeskScreen';
import AddHeaderButton from '../common/AddHeaderButton';
import { toggleIsAddInput } from '../../actions/columnActions';

const Navigation = ({ isAuth, toggleIsAddInput }) => {
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
          <Stack.Screen
            name="My Desk"
            component={myDeskScreen}
            options={{
              headerRight: () => (
                <AddHeaderButton onPress={() => toggleIsAddInput()} />
              ),
            }}
          />
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

const mapDispatchToProps = {
  toggleIsAddInput,
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
