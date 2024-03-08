import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature'



function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <div className='name'>
        <div className='name-box'> 
        <h1> Teste de reatividade  
          <span> Fabrica de Software </span>
        </h1>
        <p className='details'>Teste reatividade</p>
        </div>
      </div>
    </div>
  );
}
export default App;
