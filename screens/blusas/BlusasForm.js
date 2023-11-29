import React from 'react'
import { ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import blusasValidators from '../../validators/blusasValidator';


const BlusasForm = ({navigation, route}) => {
  const blusa = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('blusas').then(res =>{
      const blusas = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        blusas.splice(id,1,dados)
      } else {
        blusas.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('blusas', JSON.stringify(blusas))
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
     initialValues={blusa}
     validationSchema={blusasValidators}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched, setFieldValue})=>(
      <View>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Marca da blusa" 
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
  selectedValue={values.cor}
  onValueChange={handleChange('cor')}
  style={{
    marginTop: 10}}
>
<Picker.Item label="Cor" value="" />
  <Picker.Item label="preto" value="preto" />
  <Picker.Item label="branco" value="branco" />
  <Picker.Item label="vermelho" value="vermelho" />
  <Picker.Item label="amarelo" value="amarelo" />
</Picker>
{(errors.cor && touched.cor) && <Text style={{color: 'red'}}> {errors.cor} </Text>}
   
    <Button  mode="contained" buttonColor='#C4A403' onPress={handleSubmit}  style={{
    marginTop: 10}}> Enviar </Button>
      </View>
    )}
       </Formik>
    </ScrollView>
    </>
  )
}

export default BlusasForm