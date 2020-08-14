import React, { useEffect } from 'react';
import './App.css';
import PaginaInicial from './componentes/PaginaInicial';

function App() {
  return (
    <div className="App">
      <PaginaInicial/>
      <PaginaInicial/>
    </div>
  );
}

export default App;


// useEffect(() => {
//   mostra algo depois que for executado o App.
//   exemplo: usuario passar o resultado de uma soma, e o useEffect dá o resultado logo depois.
// });

// useEffect(() => {
//    mostra algo depois que for executado o App.
//    exemplo: usuario passar o resultado de uma soma, e o useEffect dá o resultado logo depois.
// }, []); Usando ARRAY, ele evita que o useEffect se repita várias vezes.