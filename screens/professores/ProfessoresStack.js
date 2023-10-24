import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfessoresForm from './ProfessoresForm';
import Professores from './Professores';


const Stack = createNativeStackNavigator();

const ProfessoresStack = () => {
  return (
    <>
     <Stack.Navigator>
                <Stack.Screen name="professores" component={Professores} options={{ title: 'Professores' }} />
                <Stack.Screen name="professores-form" component={ProfessoresForm} options={{ title: 'Professores - Form' }} />
    </Stack.Navigator>
    </>
  )
}

export default ProfessoresStack