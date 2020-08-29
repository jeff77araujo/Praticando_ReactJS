import React from 'react';
import BotaoVoltar from '../BotaoVoltar';
import '../PaginaInicial/style.css';

const PaginaBackEnd = () => (
    <div>
        <h1>Node.js</h1>

        <p>
        O Node.js é uma tecnologia, uma plataforma que utiliza o JavaScript como sintaxe.
        Através dele, é possível desenvolver pequenas e grandes aplicações. É de código aberto e possui uma ampla comunidade.
        </p>

        <a className='opcao-front-back' href='https://www.devmedia.com.br/node-js/'>Guia de React</a>

        <BotaoVoltar/>
    </div>
);

export default PaginaBackEnd;