import React from 'react'
import { ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortsValidators from '../../validators/shortsValidator';


const ShortsForm = ({navigation, route}) => {
  const short = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('shorts').then(res =>{
      const shorts = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        shorts.splice(id,1,dados)
      } else {
        shorts.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('shorts', JSON.stringify(shorts))
      navigation.goBack();
    }
    })

  }
  return (
    <>
    <ScrollView style={{
      margin: 10
    }}> 
    <Text> Formulário dos Shorts </Text>
    <Formik
     initialValues={short}
     validationSchema={shortsValidators}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched, setFieldValue})=>(
      <View>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Marca da short" 
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
    {(errors.quantidade && touched.quantidade) && <Text style={{color: 'red'}}> {errors.quantidade} </Text>}
    <Divider/>
<Divider/>
<Picker
  selectedValue={values.tamanho}
  onValueChange={handleChange('tamanho')}
  style={{
    marginTop: 10}}
>
<Picker.Item label="Tamanho" value="" />
  <Picker.Item label="P" value="P" />
  <Picker.Item label="M" value="M" />
  <Picker.Item label="G" value="G" />
  <Picker.Item label="GG" value="GG" />
</Picker>
{(errors.tamanho && touched.tamanho) && <Text style={{color: 'red'}}> {errors.tamanho} </Text>}
   
<Divider/>
<Picker
  selectedValue={values.modelo}
  onValueChange={handleChange('modelo')}
  style={{
    marginTop: 10}}
>
<Picker.Item label="modelo" value="" />
  <Picker.Item label="Cargo" value="preto" />
  <Picker.Item label="Jeans" value="branco" />
  <Picker.Item label="tactel" value="tactel" />

</Picker>
{(errors.modelo && touched.modelo) && <Text style={{color: 'red'}}> {errors.modelo} </Text>}
   
    <Button  mode="contained" buttonColor='#C4A403' onPress={handleSubmit}  style={{
    marginTop: 10}}> Enviar </Button>
      </View>
    )}
       </Formik>
    </ScrollView>
    </>
  )
}

export default ShortsForm