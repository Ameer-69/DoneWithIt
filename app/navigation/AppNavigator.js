import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingsScreen from '../screens/ListingsScreen';
import ListingsEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';

import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="ListingsEdit" component={ListingsEditScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigator;
