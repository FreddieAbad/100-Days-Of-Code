import React from 'react';
import './Global/css/App.css';
//Componentes
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
