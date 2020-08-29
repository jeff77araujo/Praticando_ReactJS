import React from  'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import ScreenTitle from '../components/ScreenTitle';

const SignUpScreen = ({history}) => {
    return (
        <>
        <ScreenTitle>Cadastrar</ScreenTitle>
        <TextInput placeholder='seu@email.com' onChangeText={(text) => console.log('texto', text)}></TextInput>
        <Button onPress={()=>history.push('/login')}>Cadastrar</Button>
        </>
    )
};

export default SignUpScreen;