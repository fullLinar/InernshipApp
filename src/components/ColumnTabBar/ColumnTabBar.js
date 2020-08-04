import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ColumnScreen from '../../screens/ColumnScreen';
import Subscribed from '../Subscribed';

const Tab = createMaterialTopTabNavigator();

const ColumnTabBar = ({ route }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="My Prayers"
        component={ColumnScreen}
        initialParams={{ colId: route.params.colId }}
      />
      <Tab.Screen name="Subscribed" component={Subscribed} />
    </Tab.Navigator>
  );
};

export default ColumnTabBar;
