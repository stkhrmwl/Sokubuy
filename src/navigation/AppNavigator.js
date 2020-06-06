import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/HomeScreen';
import PastEventScreen from '../screens/PastEventScreen';
import CircleListScreen from '../screens/CircleListScreen';
import ItemListScreen from '../screens/ItemListScreen';
import AddEventScreen from '../screens/AddEventScreen';
import EditEventScreen from '../screens/EditEventScreen';
import AddCircleScreen from '../screens/AddCircleScreen';
import EditCircleScreen from '../screens/EditCircleScreen';
import AddItemScreen from '../screens/AddItemScreen';
import EditItemScreen from '../screens/EditItemScreen';

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
        <Stack.Screen
          name="EditEvent"
          component={EditEventScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddCircle"
          component={AddCircleScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditCircle"
          component={EditCircleScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditItem"
          component={EditItemScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
