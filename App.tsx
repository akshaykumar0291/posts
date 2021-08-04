import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PostsScreen from './src/screens/PostsScreen';
import PostInfoScreen from './src/screens/PostInfoScreen';

const Stack = createNativeStackNavigator();

const RouteNavigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='PostsScreen' component={PostsScreen} />
        <Stack.Screen name='PostInfoScreen' component={PostInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RouteNavigation;