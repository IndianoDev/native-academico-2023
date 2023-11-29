import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ClientesStack from './screens/cliente/ClientesStack';
import BlusasStack from './screens/blusas/BlusasStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ShortsStack from './screens/shorts/ShortsStack';
import TenisStack from './screens/tenis/TenisStack';
import FornecedoresStack from './screens/fornecedores/FornecedoresStack';




const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
    
    <PaperProvider>       
      <NavigationContainer>
      <Tab.Navigator barStyle={{backgroundColor: "#C4A403"}}>
     
      <Tab.Screen 
       name='Clientes'
       component={ClientesStack}
       options={{
        tabBarLabel: 'Clientes',       
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
        />
      <Tab.Screen
       name='Fornecedor' 
       component={FornecedoresStack} 
       options={{
        tabBarLabel: 'Fornecedor',    
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="mailbox-up" color={color} size={26} />
        ),
      }}
       />
       <Tab.Screen
       name='Blusas' 
       component={BlusasStack} 
       options={{
        tabBarLabel: 'Blusas',   
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="tshirt-crew" color={color} size={26} />
        ),
      }}
       />
        <Tab.Screen 
      name='Shorts' 
      component={ShortsStack}
      options={{
        tabBarLabel: 'Shorts',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="hanger" color={color} size={26} />
        ),
      }}
       />

       <Tab.Screen
       name='Tenis' 
       component={TenisStack} 
       options={{
        tabBarLabel: 'Tenis', 
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="foot-print" color={color} size={26} />
        ),
      }}
       />
      
        
    </Tab.Navigator>

      </NavigationContainer>
   </PaperProvider>
    </>
    
  );
}