import React from 'react';
import BotaoVoltar from '../BotaoVoltar';
import '../PaginaInicial/style.css';

const PaginaFrontEnd = () => (
    <div>
        <h1>React.js</h1>

        <p>
        Como definido por seus criadores, React é “uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI).
        </p>

        <a className='opcao-front-back' href='https://www.devmedia.com.br/react/'>Guia de React</a>

        <BotaoVoltar/>
    </div>
);

export default PaginaFrontEnd;