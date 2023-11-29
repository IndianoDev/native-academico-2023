import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BlusasForm from './BlusasForm';
import BlusasList from './BlusasList';

const Stack = createNativeStackNavigator();

const PocoesStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='blusas' component={BlusasList} options={{title: "Blusas"}} />
    <Stack.Screen name='form-blusas' component={BlusasForm} options={{title: "Escolha sua Blusa"}} />
    </Stack.Navigator>
    </>
  )
}

export default PocoesStack