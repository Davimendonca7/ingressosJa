import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Filmes.css';
import { Link } from 'react-router-dom';

const Filmes = ({ cidade, onFilmeSelecionado }) => {
  useEffect(() => {
    document.title = "IngressosJá";
  }, []);
  
  const [activeButton, setActiveButton] = useState('emCartaz');
  const [data, setData] = useState([])
  
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  
  const handleFilmeClick = (nome, url) => {
    
    onFilmeSelecionado(nome, url);
  };
  
  
  // console.log('id corre?', cidade);
  useEffect(() => {
    axios.get(`http://localhost:8080/filmes/${cidade}/filmes`)
        .then(response => {
            console.log('filmes', response.data);
            setData(response.data)
            
        })
        .catch(error => {
            console.error('Erro ao enviar requisição:', error);
        });
    }, [cidade]); 

  return (
    <div className="filme">
      <div className="container-filme">
        <div className="col-btn-1">
          <button
            style={{
              fontWeight: activeButton === 'emCartaz' ? 'bold' : 'normal',
              fontSize: activeButton === 'emCartaz' ? '23px' : '20px',
              borderBottom: activeButton === 'emCartaz' ?  '6px solid #FFC100' : 'none'
            }}
            className="btn-filmes emCartaz"
            onClick={() => handleButtonClick('emCartaz')}
          >
            Em cartaz
          </button>
          <button
            style={{
              fontWeight: activeButton === 'emBreve' ? 'bold' : 'normal',
              fontSize: activeButton === 'emBreve' ? '23px' : '20px',
              borderBottom: activeButton === 'emBreve' ?  '6px solid #FFC100' : 'none'
            }}
            className="btn-filmes emBreve"
            onClick={() => handleButtonClick('emBreve')}
          >
            Em breve
          </button>
        </div>
        <div className="filmes-container-list">
          {data.map((d) => {
           
              return (
                <div key={d.id} className="filme-item">
                  <Link
                    onClick={() => handleFilmeClick(d.titulo, d.capa)}
                    to={'/filme'}
                    className='buttonFilme'
                  >
                    <img className='imgFilme' src={d.capa} alt={d.titulo} />
                    <p className='nome-filme'>{d.titulo}</p>
                  </Link>
                </div>
              );
            }
       
          )}
        </div>
      </div>
    </div>
  );
};

export default Filmes;
