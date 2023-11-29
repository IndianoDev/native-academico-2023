import React from 'react'
import { ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Button, Divider, Text, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mask } from 'remask';
import fornecedoresValidator from '../../validators/fornecedoresValidator';


const FornecedoresForm = ({navigation, route}) => {
  const fornecedor = route.params?.obj  || {}
  const id = route.params?.id

  async function salvar(dados){
    AsyncStorage.getItem('fornecedores').then(res =>{
      const fornecedores = JSON.parse(res) || []        
    if(JSON.stringify(dados) != "{}"){
      if(id >= 0){
        fornecedores.splice(id,1,dados)
      } else {
        fornecedores.push(dados)
      }
      console.log(dados);
      AsyncStorage.setItem('fornecedores', JSON.stringify(fornecedores))
      navigation.goBack();
    }
    })

  }
  return (
    <>
    <ScrollView style={{
      margin: 10
    }}> 
    <Text> Formulário do Fornecedor </Text>
    <Formik
     initialValues={fornecedor}
     validationSchema={fornecedoresValidator}
     onSubmit={values => salvar(values)}
   >
    {({values, handleChange, handleSubmit, errors, touched, setFieldValue})=>(
      <View>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Proprietario" 
    mode='outlined' 
    value={values.proprietario}
    onChangeText={handleChange("proprietario")}
    
    />
    {(errors.proprietario && touched.proprietario) && <Text style={{color: 'red'}}> {errors.proprietario} </Text>}
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="CNPJ" 
    mode='outlined' 
    value={values.cnpj}
    onChangeText={value => setFieldValue('cnpj',mask(value, '99.999.999/9999-99'))}
    />
   
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Email" 
    mode='outlined' 
    value={values.email}
    onChangeText={handleChange("email")}
    />
    {(errors.email && touched.email) && <Text style={{color: 'red'}}> {errors.email} </Text>}
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="CPF" 
    mode='outlined' 
    value={values.cpf}
    onChangeText={value => setFieldValue('cpf',mask(value, '999.999.999-99'))}
    />
    {(errors.cpf && touched.cpf) && <Text style={{color: 'red'}}> {errors.cpf} </Text>}
    <Divider/>
    <TextInput style={{
      marginTop: 5
    }} 
    label="Telefone" 
    mode='outlined' 
    value={values.telefone}
    onChangeText={value => setFieldValue('telefone',mask(value, '(99)999999999'))}
    />
    {(errors.telefone && touched.telefone) && <Text style={{color: 'red'}}> {errors.telefone} </Text>}
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

export default FornecedoresForm