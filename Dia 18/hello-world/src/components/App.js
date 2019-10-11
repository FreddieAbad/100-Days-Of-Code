//Dependencias
import React from 'react';
import './Global/css/App.css';
//Componentes
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';
//Data
import items from '../data/Menu';


function App() {
  return (
    <div className="App">
      <Header title="Codejobs" items={items}/>
      <Content />
      <Footer copyright="&copy; Codejobs 2019" />
    </div>
  );
}

export default App;
