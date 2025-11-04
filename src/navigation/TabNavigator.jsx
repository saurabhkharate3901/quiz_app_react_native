import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Product from '../screens/Product';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
      />
      <Tab.Screen 
        name="Product" 
        component={Product}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
