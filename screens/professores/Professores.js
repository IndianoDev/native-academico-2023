import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'

  const Professores = ({navigation}) => {

  const [Professor, setProfessor] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('Professores').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setProfessor(resultado)
    })
}, [])


  return (
    <>
    <Text style={{marginBottom:10}}>Professores</Text>
    <Button 
    icon='plus'
    mode='contained'
    onPress={()=>navigation.push('Professores - Form')}
    style={{marginBottom:10}}
    >
    Novo
    </Button>
    {Professor.map(item=>(
     <Card style={{marginBottom: 10}}>
      <Text>{item.nome}</Text>
      </Card>
    ))}

    </>
  )
}

export default Professores