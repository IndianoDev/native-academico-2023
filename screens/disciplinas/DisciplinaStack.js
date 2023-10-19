import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Disciplinas from './Disciplinas';
import DisciplinasForm from './DisciplinasForm';

const Stack = createNativeStackNavigator();

const DisciplinasStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name="Disciplinas" component={Disciplinas} options={{ title: 'Disciplinas' }} />
                <Stack.Screen name="Disciplinas - Form" component={DisciplinasForm} options={{ title: 'Disciplinas - Form' }} />
    </Stack.Navigator>
    </>
  )
}

export default DisciplinasStack