import React from 'react'
import './BannerFilme.css'
const BannerFilme = ({nome, url}) => {
  return (
    <div className='banner-filme'>
      <div className="banner">
            <img className='img-banner' src={url}/>
            <div className="description">
                <h1 className='title-banner'>{nome}</h1>
                <p className='description-banner'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, assumenda! Esse inventore, alias sint accusantium minima harum porro illo reiciendis incidunt laudantium dolor, omnis culpa totam ab suscipit voluptas obcaecati!</p>
                <div className='classificacao-banner'>
                    <p className='idade-banner'>12+</p>
                    <p className='genero-banner'>Ação</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default BannerFilme
