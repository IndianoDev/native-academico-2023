import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FornecedoresList from './FornecedoresList';
import FornecedoresForm from './FornecedoresForm';

const Stack = createNativeStackNavigator();

const FornecedoresStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='fornecedores' component={FornecedoresList} options={{title: "Fornecedor"}} />
    <Stack.Screen name='form-fornecedores' component={FornecedoresForm} options={{title: "Form-Fornecedor"}} />
    </Stack.Navigator>
    </>
  )
}

export default FornecedoresStack