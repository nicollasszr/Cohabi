import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home'
import ShoppingList from './src/screens/ShoppingList'
import NoticeBoard from './src/screens/NoticeBoard'
import Profile from './src/screens/Profile'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
    
        <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} />

        <Stack.Screen name="ShoppingList" component={ShoppingList} options={{ title: 'Lista de Compras' }} />

        <Stack.Screen name="NoticeBoard" component={NoticeBoard} options={{ title: 'Mural' }} />

        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
