import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, } from 'react-native'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'


const Professores = ({ navigation }) => {


  const [professores, setprofessores] = useState([])
  const [idExcluir, setExcluir] = useState(0)

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  useFocusEffect(

    React.useCallback(() => {
      carregarDados()
    }, [])
  );

  function carregarDados() {
    AsyncStorage.getItem('professores').then(resultado => {
      resultado = JSON.parse(resultado) || []
      console.log(resultado)
      setprofessores(resultado)
    })
  }

  function confirmarExclusao(id) {
    setExcluir(id)
    setVisible(true)

  }

  function excluir() {

    professores.splice(idExcluir, 1)
    AsyncStorage.setItem('professores', JSON.stringify(professores))
    carregarDados()
    setVisible(false)
  }

  return (
    <>
      <ScrollView style={{ padding: 15 }}>

        {professores.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 10 }}>
            <Card.Content>
              <Text variant="titleLarge">nome: {item.nome}</Text>
              <Text variant="bodyMedium">CPF: {item.cpf}</Text>
              <Text variant="bodyMedium">Matrícula: {item.matricula}</Text>
              <Text variant="bodyMedium">Salario: {item.salario}</Text>
              <Text variant="bodyMedium">Email: {item.email}</Text>
              <Text variant="bodyMedium">Telefone: {item.telefone}</Text>
              <Text variant="bodyMedium">CEP: {item.cep}</Text>
              <Text variant="bodyMedium">Logradouro: {item.logradouro}</Text>
              <Text variant="bodyMedium">Complemento: {item.complemento}</Text>
              <Text variant="bodyMedium">Numero: {item.numero}</Text>
              <Text variant="bodyMedium">Bairro: {item.bairro}</Text>
            
            </Card.Content>
            <Card.Actions>
              <IconButton icon='pencil-outline'
                iconColor='blue'
                onPress={() => navigation.push('professores-form', { id: i, professores: item })}
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
        onPress={() => navigation.push('professores-form')}
      />

    </>
  )
}

export default Professores