import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'


const ProfessoresForm = ({navigation}) => {

  const [dados, setDados] = useState({})

  function handlechange(valor, campo) {
    setDados({ ...dados, [campo]: valor })
  }

  function salvar() {

    AsyncStorage.getItem('professores').then(resultado => {
      const professores = JSON.parse(resultado) || []
      professores.push (dados)
      console.log(professores)
   
      AsyncStorage.setItem('professores', JSON.stringify(professores))
   
      navigation.goBack()
    })

   
  }

  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Formulário de Professores</Text>
        <TextInput style={{ marginTop: 10 }} label='Nome' mode='outlined' onChangeText={(valor) => handlechange(valor, 'nome')} value={dados.nome}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='CPF' mode='outlined' onChangeText={(valor) => handlechange(valor, 'cpf')} value={dados.cpf}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Matricula' mode='outlined' onChangeText={(valor) => handlechange(valor, 'matricula')} value={dados.matricula}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Salario' mode='outlined' onChangeText={(valor) => handlechange(valor, 'salario')} value={dados.salario}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='E-mail' mode='outlined' onChangeText={(valor) => handlechange(valor, 'e-mail')} value={dados.email}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Telefone' mode='outlined' onChangeText={(valor) => handlechange(valor, 'telefone')} value={dados.telefone}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='CEP' mode='outlined' onChangeText={(valor) => handlechange(valor, 'cep')} value={dados.cep}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Logradouro' mode='outlined' onChangeText={(valor) => handlechange(valor, 'logradouro')} value={dados.logradouro}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Complemento' mode='outlined' onChangeText={(valor) => handlechange(valor, 'complemento')} value={dados.complemento}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Número' mode='outlined' onChangeText={(valor) => handlechange(valor, 'numero')} value={dados.numero}></TextInput>
        <TextInput style={{ marginTop: 10 }} label='Bairro' mode='outlined' onChangeText={(valor) => handlechange(valor, 'bairro')} value={dados.bairro}></TextInput>
        <Button onPress={salvar}>Salvar</Button>
      </ScrollView>
    </>
  )
}

export default ProfessoresForm