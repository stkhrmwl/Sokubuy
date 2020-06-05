import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/HomeScreen';
import PastEventScreen from '../screens/PastEventScreen';
import CircleListScreen from '../screens/CircleListScreen';
import ItemListScreen from '../screens/ItemListScreen';
import AddEventScreen from '../screens/AddEventScreen';

const Stack = createStackNavigator();

export default AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Past"
          component={PastEventScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CircleList"
          component={CircleListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ItemList"
          component={ItemListScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddEvent"
          component={AddEventScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
