import React, { useState } from 'react';
import './Filmes.css';

const Filmes = ({ cidade }) => {
    const data = [
      { "id": 1,  "cidade": "São Paulo", "nome": "O Poderoso Chefão", "urlImagem": "https://a-static.mlcdn.com.br/450x450/poster-cartaz-o-poderoso-chefao-a-pop-arte-poster/poparteskins2/15938506091/c37244ecb827fb37e48bbbaad5c7a437.jpeg" },
      { "id": 2,  "cidade": "Rio de Janeiro", "nome": "Vingadores: Ultimato", "urlImagem": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
      { "id": 3,  "cidade": "São Paulo", "nome": "Interestelar", "urlImagem": "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
      { "id": 4,  "cidade": "São Paulo", "nome": "Parasita", "urlImagem": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },
      { "id": 5,  "cidade": "São Paulo", "nome": "O Rei Leão", "urlImagem": "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg" },
      { "id": 6,  "cidade": "São Paulo", "nome": "Coringa", "urlImagem": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
      { "id": 7,  "cidade": "São Paulo", "nome": "Harry Potter e a Pedra Filosofal", "urlImagem": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg" },
      { "id": 8,  "cidade": "Rio de Janeiro", "nome": "Matrix", "urlImagem": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
      { "id": 9,  "cidade": "Rio de Janeiro", "nome": "Forrest Gump", "urlImagem": "https://i.pinimg.com/originals/7a/62/ca/7a62ca23450c1449bbabcc7ac0af8954.jpg" },
      { "id": 10, "cidade": "Rio de Janeiro",  "nome": "O Senhor dos Anéis: A Sociedade do Anel", "urlImagem": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg" },
      { "id": 11, "cidade": "Belo Horizonte", "nome": "O Grande Truque", "urlImagem": "https://image.tmdb.org/t/p/w500/vHqvGwbGfXTWIBS0cM57eSjjw57.jpg" },
      { "id": 12, "cidade": "Porto Alegre", "nome": "Clube da Luta", "urlImagem": "https://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg" },
      { "id": 13, "cidade": "Curitiba", "nome": "A Origem", "urlImagem": "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
      { "id": 14, "cidade": "Recife", "nome": "Django Livre", "urlImagem": "https://image.tmdb.org/t/p/w500/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg" },
      { "id": 15, "cidade": "Fortaleza", "nome": "Gladiador", "urlImagem": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
      { "id": 16, "cidade": "Salvador", "nome": "A Vida é Bela", "urlImagem": "https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg" },
      { "id": 17, "cidade": "Brasília", "nome": "Pulp Fiction", "urlImagem": "https://image.tmdb.org/t/p/w500/plnlrtBUULT0rh3Xsjmpubiso3L.jpg" },
      { "id": 18, "cidade": "Manaus", "nome": "O Lobo de Wall Street", "urlImagem": "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg" }
    ]
    
    
  const [activeButton, setActiveButton] = useState('emCartaz');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

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
            {data.map((d)=>{
              if(cidade === d.cidade){
                
                return ( <div key={d.id} className="filme-item">
                  <button>
                  <img className='imgFilme' src={d.urlImagem} alt="" />
                  <p className='nome-filme'>{d.nome}</p>
                </button>
              </div>)
              }
  })}
        </div>
      </div>
    </div>
  );
};

export default Filmes;
