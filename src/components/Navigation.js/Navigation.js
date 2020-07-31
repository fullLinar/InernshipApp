import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import LoginScreen from '../../screens/loginScreen';
import RegistrationScreen from '../../screens/RegistrationScreen';
import { connect } from 'react-redux';
import { getAuth } from '../../selectors/selectors';
import myDeskScreen from '../../screens/MyDeskScreen';
import AddButton from '../common/AddButton';
import { toggleIsAddInput } from '../../actions/columnActions';
import ColumnScreen from '../../screens/ColumnScreen';

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
          <>
            <Stack.Screen
              name="My Desk"
              component={myDeskScreen}
              options={{
                headerRight: () => (
                  <AddButton
                    onPress={() => toggleIsAddInput()}
                    width={16}
                    height={16}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="Column"
              component={ColumnScreen}
              options={({ route }) => ({
                title: route.params.title,
                colId: route.params.colId,
              })}
            />
          </>
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
