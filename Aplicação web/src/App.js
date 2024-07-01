import { useState } from 'react';
import './App.css';
import Filmes from './components/Filmes';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Cadastrar from './Cadastrar';
import SpecificFilm from './SpecificFilm';

function App() {
  const [dataCidade, setDataCidade] = useState('')
  const [dataFilmeSelecionado, setDataFilmeSelecionado] = useState([])
  const hanleDataChange = (data) =>{
    setDataCidade(data)
  }
  const hanleFilme = (nome, url) =>{
    setDataFilmeSelecionado([])
    setDataFilmeSelecionado(prev => [...prev, nome, url])
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
                {dataCidade !== '' && <Filmes cidade={dataCidade} onFilmeSelecionado={hanleFilme}/>}
              </div>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastrar' element={<Cadastrar/>}/>
          <Route path='/filme' element={<SpecificFilm filmeSelecionado={dataFilmeSelecionado} />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
