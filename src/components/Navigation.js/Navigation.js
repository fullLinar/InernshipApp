import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/loginScreen';
import RegistrationScreen from '../../screens/RegistrationScreen';
import { connect } from 'react-redux';
import { getAuth } from '../../selectors/selectors';
import myDeskScreen from '../../screens/MyDeskScreen';
import AddButton from '../common/AddButton';
import { toggleIsAddInput } from '../../actions/columnActions';
import SettingButton from '../common/SettingButton/SettingButton';
import ColumnTabBar from '../ColumnTabBar/ColumnTabBar';
import PrayerInfoScreen from '../../screens/PrayerInfoScreen';
import PrayerHeader from '../PrayerHeader/PrayerHeader';

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
              component={ColumnTabBar}
              options={({ route }) => ({
                title: route.params.title,
                colId: route.params.colId,
                headerRight: () => <SettingButton />,
                headerLeft: null,
                headerStyle: {
                  shadowColor: 'transparent',
                },
              })}
            />
            <Stack.Screen
              name="Prayer"
              component={PrayerInfoScreen}
              options={({ route }) => ({
                title: route.params.title,
                prayerId: route.params.prayerId,
                header: (props) => (
                  <PrayerHeader {...props} title={route.params.title} />
                ),
                headerLeft: null,
                headerTitleContainerStyle: {
                  minWidth: '100%',
                  minHeight: '100%',
                  paddingVertical: 25,
                },
                headerStyle: {},
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
