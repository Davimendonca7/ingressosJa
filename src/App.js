import { useState } from 'react';
import './App.css';
import Filmes from './components/Filmes';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastrar from './Cadastrar';

function App() {
  const [dataCidade, setDataCidade] = useState('')
  const hanleDataChange = (data) =>{
    setDataCidade(data)
  }
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={
            <div className="App">
                <Header onDataChanged={hanleDataChange}/>
                <h2 className="title-container-filme">
                    Filmes - {dataCidade === '' ? 'Escolha uma cidade para ver os filmes disponíveis' : dataCidade}
                  </h2>
                {dataCidade !== '' && <Filmes cidade={dataCidade}/>}
              </div>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastrar' element={<Cadastrar/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
