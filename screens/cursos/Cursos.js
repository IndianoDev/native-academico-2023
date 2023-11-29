import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView,  } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton,  Portal, Text } from 'react-native-paper'

const Cursos = ({ navigation  }) => {


  const [cursos, setCursos] = useState([])
  const [idExcluir, setExcluir] =useState(0)

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  useFocusEffect(

    React.useCallback(() => {
      carregarDados()
    }, [])
  );

  function carregarDados() {
    AsyncStorage.getItem('cursos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setCursos(resultado)
    })
  }

function confirmarExclusao(id){
  setExcluir(id)
  setVisible(true)
  
}

  function excluir() {
    cursos.splice(idExcluir, 1)
    AsyncStorage.setItem('cursos', JSON.stringify(cursos))
      carregarDados()
      setVisible(false)
  }

  return (
    <>

      <ScrollView style={{ padding: 15 }}>

        {cursos.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">Duração: {item.duracao}sem.</Text>
              <Text variant="bodyMedium">Modalidade: {item.modalidade}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton 
              icon='pencil-outline'
                onPress={() => navigation.push('cursos-form', {id: i, cursos: item})}
                ></IconButton>

              <IconButton icon='trash-can-outline'
                iconColor='red'
              onPress={() => confirmarExclusao(i)}></IconButton>
            </Card.Actions>
          </Card>
        ))}
  <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>           
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente Excluir o registo?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>sim</Button>
              <Button onPress={hideDialog}>não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

      </ScrollView>

      <FAB
        icon="plus"
        size='small'
        color='blue'
        style={{ position: 'absolute', right: 10, bottom: 10 }}
        onPress={() => navigation.push('cursos-form')}
      />

    </>
  )
}

export default Cursos