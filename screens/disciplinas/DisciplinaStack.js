import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Disciplinas from './Disciplinas';
import DisciplinasForm from './DisciplinasForm';

const Stack = createNativeStackNavigator();

const DisciplinasStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name="disciplinas" component={Disciplinas} options={{ title: 'Disciplinas' }} />
                <Stack.Screen name="disciplinas-Form" component={DisciplinasForm} options={{ title: 'Disciplinas - Form' }} />
    </Stack.Navigator>
    </>
  )
}

export default DisciplinasStack