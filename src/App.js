import { useState } from 'react';
import './App.css';
import Filmes from './components/Filmes';
import Header from './components/Header';

function App() {
  const [dataCidade, setDataCidade] = useState('')
  const hanleDataChange = (data) =>{
    setDataCidade(data)
  }
  return (
    <div className="App">
      <Header onDataChanged={hanleDataChange}/>
      <h2 className="title-container-filme">
          Filmes - {dataCidade === '' ? 'Escolha uma cidade para ver os filmes disponíveis' : dataCidade}
        </h2>
      {dataCidade !== '' && <Filmes cidade={dataCidade}/>}
    </div>
  );
}

export default App;
