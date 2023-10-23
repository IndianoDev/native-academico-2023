import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'


const DisciplinasForm = ({navigation, route}) => {

  const curso = route.params?.curso || {}
  const id = route.params?.id  

  const [dados, setDados] = useState(curso)

  function handleChange(valor, campo) {
    setDados({...dados, [campo]: valor })
  }

  function salvar() {

    AsyncStorage.getItem('disciplinas').then(resultado => {
      
      const disciplinas = JSON.parse(resultado) || []
      
      if(id >= 0){
        disciplinas.splice(id, 1, dados)
      }else{  
        disciplinas.push(dados)
      }

 
      console.log(disciplinas)
  
      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))
  
      navigation.goBack()
    })

  }

  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text >Formulário de Disciplinas</Text>

        <TextInput style={{ marginTop: 10 }} label='Nome' 
        mode='outlined' 
        onChangeText={(valor) => handlechange(valor, 'nome')} 
        value={dados.nome}></TextInput>

        <TextInput style={{ marginTop: 10 }} 
        label='Curso'
         mode='outlined' 
         onChangeText={(valor) => handlechange(valor, 'curso')} 
         value={dados.curso}></TextInput>

        <Button onPress={salvar}>Salvar</Button>
      </ScrollView>
    </>
  )
}

export default DisciplinasForm