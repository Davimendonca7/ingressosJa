import React from 'react'
import BannerFilme from './components/BannerFilme.js'
import SessoesFilme from './components/SessoesFilme.js';


const SpecificFilm = ({filmeSelecionado}) => {  
  console.log('aaaa', filmeSelecionado);
  return (
    <div>
        <BannerFilme nome={filmeSelecionado[0]} url={filmeSelecionado[1]} description={filmeSelecionado[2]} duracao={filmeSelecionado[3]} genero={filmeSelecionado[4]} classificacao={filmeSelecionado[5]}/>
        <SessoesFilme idFilme={filmeSelecionado[6]} idCinema={filmeSelecionado[7]}/>
    </div>
  )
}

export default SpecificFilm
