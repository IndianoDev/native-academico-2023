import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShortsForm from './ShortsForm';
import ShortsList from './ShortsList';

const Stack = createNativeStackNavigator();

const ShortsStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='shorts' component={ShortsList} options={{title: "Shorts"}} />
    <Stack.Screen name='form-shorts' component={ShortsForm} options={{title: "Escolha seu Short"}} />
    </Stack.Navigator>
    </>
  )
}

export default ShortsStack