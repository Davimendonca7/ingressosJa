import React from 'react'
import BannerFilme from './components/BannerFilme.js'


const SpecificFilm = ({filmeSelecionado}) => {
    console.log('file =====>', filmeSelecionado[0])
    console.log('file =====>', filmeSelecionado[1])
  return (
    <div>
        <BannerFilme nome={filmeSelecionado[0]} url={filmeSelecionado[1]}/>
    </div>
  )
}

export default SpecificFilm
