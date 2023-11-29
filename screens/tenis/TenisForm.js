import React from 'react'
import { ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tenisValidators from '../../validators/tenisValidator';


const TenisForm = ({navigation, route}) => {
  const teni = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('tenis').then(res =>{
      const tenis = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        tenis.splice(id,1,dados)
      } else {
        tenis.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('tenis', JSON.stringify(tenis))
      navigation.goBack();
    }
    })

  }
  return (
    <>
    <ScrollView style={{
      margin: 10
    }}> 
    <Text> Formulário de Poções </Text>
    <Formik
     initialValues={teni}
     validationSchema={tenisValidators}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched, setFieldValue})=>(
      <View>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Marca do Tenis" 
    mode='outlined' 
    value={values.marca}
    onChangeText={handleChange("marca")}
    />
    {(errors.marca && touched.marca) && <Text style={{color: 'red'}}> {errors.marca} </Text>}
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Quantidade" 
    mode='outlined' 
    value={values.quantidade}
    onChangeText={handleChange("quantidade")}
    
    />
    {(errors.quantidade && touched.quantidade) && <Text style={{color: 'red'}}> {errors.quantidade}
     </Text>}
<Divider/>
    <Picker
  selectedValue={values.modelo}
  onValueChange={handleChange('modelo')}
>
<Picker.Item label="modelo" value="" />
  <Picker.Item label="Social" value="Social" />
  <Picker.Item label="Street" value="Street" />
  <Picker.Item label="Esportivo" value="Esportivo" />
</Picker>
    {(errors.modelo && touched.modelo) && <Text style={{color: 'red'}}> {errors.modelo} </Text>}
    <Divider/>

    <Picker
  selectedValue={values.tamanho}
  onValueChange={handleChange('tamanho')}
  style={{
    marginTop: 10}}
>
<Picker.Item label="Tamanho" value="" />
  <Picker.Item label="36" value="36" />
  <Picker.Item label="37" value="37" />
  <Picker.Item label="38" value="38" />
  <Picker.Item label="40" value="40" />
  <Picker.Item label="41" value="41" />
  <Picker.Item label="42" value="42" />
</Picker>
{(errors.tamanho && touched.tamanho) && <Text style={{color: 'red'}}> {errors.tamanho} </Text>}
   
    <Divider/>

   
    <Button  mode="contained" buttonColor='#C4A403' onPress={handleSubmit}  style={{
    marginTop: 10}}> Enviar </Button>
      </View>
    )}
       </Formik>
    </ScrollView>
    </>
  )
}

export default TenisForm