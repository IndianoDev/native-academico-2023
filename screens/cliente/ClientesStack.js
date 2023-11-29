import React from 'react'
import Clientes from './ClientesList'
import ClientesForm from './ClientesForm'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CLientesStack = () => {
  return (
    <> 
    <Stack.Navigator>
    <Stack.Screen name='clientes' component={Clientes} options={{title: "Cliente"}} />
    <Stack.Screen name='form-clientes' component={ClientesForm} options={{title: "Formulario do CLiente"}} />
    </Stack.Navigator>
    </>
  )
}

export default CLientesStack