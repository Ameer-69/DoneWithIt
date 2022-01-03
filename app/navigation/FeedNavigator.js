import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Stack = createStackNavigator();

function FeedNavigator() {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
}

export default FeedNavigator;