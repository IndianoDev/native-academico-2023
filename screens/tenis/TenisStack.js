import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TenisList from './TenisList';
import TenisForm from './TenisForm';

const Stack = createNativeStackNavigator();

const TenisStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='tenis' component={TenisList} options={{title: "Tenis"}} />
    <Stack.Screen name='form-tenis' component={TenisForm} options={{title: "Escolha seu Tênis"}} />
    </Stack.Navigator>
    </>
  )
}

export default TenisStack