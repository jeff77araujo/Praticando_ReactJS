import React from  'react';

const TextInput = ({placeholder, onChangeText}) => {
    return(
        <input className='login-botao' type='text' 
        placeholder={placeholder}
        onChange={(event) => onChangeText(event.target.value)}/>
    )
}

export default TextInput;