import React from 'react';
import './App.css';

import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import HomePage from './Componentes/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
