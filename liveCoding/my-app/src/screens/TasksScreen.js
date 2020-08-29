import React from  'react';
import ScreenTitle from '../components/ScreenTitle';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

const TasksScreen = ({history}) => {
    return (
        <>
        <ScreenTitle>Olá Jeff</ScreenTitle>
        <TextInput placeholder='+' onChangeText={(text) => console.log('texto', text)}></TextInput>
        <TextInput placeholder='Digite uma mensagem' onChangeText={(text) => console.log('texto', text)}></TextInput>
        <TextInput placeholder='Digite uma mensagem' onChangeText={(text) => console.log('texto', text)}></TextInput>
        <TextInput placeholder='Digite uma mensagem' onChangeText={(text) => console.log('texto', text)}></TextInput>
        <Button onPress={()=>history.push('/login')}>Sair</Button>
        </>
        
    ) 
};

export default TasksScreen;