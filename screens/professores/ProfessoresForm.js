import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const ProfessoresForm = ({navigation, route}) => {

  const curso = route.params?.curso || {}
  const id = route.params?.id  

  const [dados, setDados] = useState(curso)

  function handleChange(valor, campo) {
    setDados({...dados, [campo]: valor })
  }

  function salvar() {

    AsyncStorage.getItem('professores').then(resultado => {
      
      const professores = JSON.parse(resultado) || []
      
      if(id >= 0){
        professores.splice(id, 1, dados)
      }else{  
        professores.push(dados)
      }

 
      console.log(professores)
  
      AsyncStorage.setItem('professores', JSON.stringify(professores))
  
      navigation.goBack()
    })

  }


  return (
    <>
      <ScrollView style={{ margin: 15 }}>

        <Text >Formulário de Professores</Text>
        <TextInput style={{ marginTop: 10 }} label='Nome' mode='outlined' onChangeText={(valor) => handleChange(valor, 'nome')} value={dados.nome}></TextInput>

        <TextInput style={{ marginTop: 10 }} label='CPF' mode='outlined' onChangeText={(valor) => handleChange(valor, 'cpf')} value={dados.cpf}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Matricula' mode='outlined' onChangeText={(valor) => handleChange(valor, 'matricula')} value={dados.matricula}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Salario' mode='outlined' onChangeText={(valor) => handleChange(valor, 'salario')} value={dados.salario}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='E-mail' mode='outlined' onChangeText={(valor) => handleChange(valor, 'e-mail')} value={dados.email}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Telefone' mode='outlined' onChangeText={(valor) => handleChange(valor, 'telefone')} value={dados.telefone}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='CEP' mode='outlined' onChangeText={(valor) => handleChange(valor, 'cep')} value={dados.cep}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Logradouro' mode='outlined' onChangeText={(valor) => handleChange(valor, 'logradouro')} value={dados.logradouro}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Complemento' mode='outlined' onChangeText={(valor) => handleChange(valor, 'complemento')} value={dados.complemento}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Número' mode='outlined' onChangeText={(valor) => handleChange(valor, 'numero')} value={dados.numero}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Bairro' mode='outlined' onChangeText={(valor) => handleChange(valor, 'bairro')} value={dados.bairro}></TextInput>
        <Button onPress={salvar}>Salvar</Button>
      </ScrollView>
    </>
  )
}

export default ProfessoresForm