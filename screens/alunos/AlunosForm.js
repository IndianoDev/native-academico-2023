import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const AlunosForm = ({navigation, route}) => {

    const aluno = route.params?.aluno || {}
    const id = route.params?.id  
  
    const [dados, setDados] = useState(aluno)
  
    function handleChange(valor, campo) {
      setDados({...dados, [campo]: valor })
    }
  
    function salvar() {
  
      AsyncStorage.getItem('alunos').then(resultado => {
        
        const alunos = JSON.parse(resultado) || []
        
        if(id >= 0){
          alunos.splice(id, 1, dados)
        }else{  
          alunos.push(dados)
        }
  
   
        console.log(alunos)
    
        AsyncStorage.setItem('alunos', JSON.stringify(alunos))
    
        navigation.goBack()
      })
  
    }

    return (
        
        <ScrollView style={{ margin: 15 }}>

            <Text>Formulário de alunos</Text>

            <Formik
     initialValues={curso}
     validationSchema={cursoValidator}
     onSubmit={values => salvar(values)}>


  {({values, handleChange, handleSubmit, errors, touched, setFieldValue}) => (
        <View>

            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                label='Nome'
                value={dados.nome}
                onChangeText={(valor) => handleChange(valor, 'nome')}
            />

            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                label='CPF'
                keyboardType='decimal-pad'
                value={dados.cpf}
                onChangeText={(value) => setFieldValue()}

            />

            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                label='Matrícula'
                value={dados.matricula}
                onChangeText={(valor) => handleChange(valor, 'matricula')}
            />

            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                label='E-mail'
                keyboardType='email-address'
                value={dados.email}
                onChangeText={(valor) => handleChange(valor, 'email')}
            />

            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                label='Telefone'
                keyboardType='number-pad'
                value={dados.telefone}
                onChangeText={(valor) => handleChange(valor, 'telefone')}
            />

            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                label='CEP'
                value={dados.cep}
                keyboardType='number-pad'
                onChangeText={(valor) => handleChange(valor, 'cep')}
            />

            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                label='Logradouro'
                value={dados.logradouro}
                onChangeText={(valor) => handleChange(valor, 'logradouro')}
            />

            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                label='Complemento'
                value={dados.complemento}
                onChangeText={(valor) => handleChange(valor, 'complemento')}
            />

            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                label='Número'
                value={dados.numero}
                onChangeText={(valor) => handleChange(valor, 'numero')}
            />

            <TextInput
                style={{ marginTop: 10 }}
                mode='outlined'
                label='Bairro'
                value={dados.bairro}
                onChangeText={(valor) => handleChange(valor, 'bairro')}
            />

            <Button onPress={salvar}>Salvar</Button>

            

            </View>
            
            )}

       
            </Formik>

        </ScrollView>
    )
}

export default AlunosForm