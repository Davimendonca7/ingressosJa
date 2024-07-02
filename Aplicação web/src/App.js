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
    console.log('pai', data);
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
                    Filmes - {dataCidade[0]}
                  </h2>
                {dataCidade !== '' && <Filmes cidade={dataCidade[1]} onFilmeSelecionado={hanleFilme}/>}
              </div>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cadastrar' element={<Cadastrar/>}/>
          <Route path='/filme' element={<SpecificFilm filmeSelecionado={dataFilmeSelecionado} />}/>
          <Route path='/conta' element={<h1>davi é corno</h1>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
