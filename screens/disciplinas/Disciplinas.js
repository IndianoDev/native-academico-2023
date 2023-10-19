import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Card, Divider, Text } from 'react-native-paper'

  const Disciplinas = ({navigation}) => {

  const [disciplina, setDisciplina] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('disciplinas').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setDisciplina(resultado)
    })
}, [])


  return (
    <>
    <Text style={{marginBottom:10}}>Disciplinas</Text>
    <Button 
    icon='plus'
    mode='contained'
    onPress={()=>navigation.push('Disciplinas - Form')}
    style={{marginBottom:10}}
    >
    Novo
    </Button>
    {disciplina.map(item=>(
     <Card style={{marginBottom: 10}}>
      <Text>{item.nome}</Text>
      </Card>
    ))}

    </>
  )
}

export default Disciplinas