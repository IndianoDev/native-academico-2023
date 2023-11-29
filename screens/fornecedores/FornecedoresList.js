import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { Button, Card, Dialog, Divider, FAB, IconButton, Portal, Text } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

const FornecedoresList = ({navigation}) => {
  const [fornecedores, setfornecedores] = useState([]);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0)

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  function get(){
    AsyncStorage.getItem('fornecedores').then(res =>{
      res = JSON.parse(res) || []
      setfornecedores(res);
    })
  }

  function confirmDelete(i){
    setId(i);
    showDialog()
  }
  function excluir(){
    fornecedores.splice(id,1);
    AsyncStorage.setItem('fornecedores', JSON.stringify(fornecedores));
    get();
    hideDialog();
  }

  useFocusEffect(
    React.useCallback(() => {
      get();
    }, [])
  );

  return (

    <>
    <ScrollView style={{margin: 10}}> 

    <View> 

     {
       fornecedores.map((item,i) =>(
          <View key={i}> 
         <Card mode='outlined' style={{backgroundColor: '#80A1C1', marginBottom: 10 }}>
         <Card.Content>
            <Text variant="titleLarge">{item.proprietario}</Text>
                <Text variant="bodyMedium">CNPJ: {item.cnpj}</Text>
                <Text variant="bodyMedium">Email: {item.email}</Text>
                <Text variant="bodyMedium">CPF: {item.cpf}</Text>
                <Text variant="bodyMedium">Telefone: {item.telefone}</Text>
              </Card.Content>
              <Card.Actions>
            <IconButton icon="trash-can" containerColor='#80A1C1'
            iconColor='red' onPress={()=>{confirmDelete(i)}}></IconButton>
            <IconButton
            containerColor='#80A1C1'
            iconColor='white'
            icon="account-edit"
            onPress={() => navigation.push('form-fornecedores', {id : i, obj : item})}></IconButton>
          </Card.Actions>
          </Card>
          </View>
        ))
      }
      <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Sim</Button>
              <Button onPress={hideDialog}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </View>
      </ScrollView>
      <FAB
    icon="plus"
    size="small"
    style={{position: 'absolute', right: 5, bottom: 0, margin: 5}}
    onPress={() => navigation.push('form-fornecedores')}
  /> 
    </>
  )
}

export default FornecedoresList