import React from 'react'
import './MenuLateralCompra.css'
const MenuLateralComprar = ({cidade, nome ,url}) => {
  console.log('city', cidade);
  return (
    <div className='menu'>
      <h2 className='titulo-compra'>RESUMO DA COMPRA</h2>
      <div className="description-menu">
        <div className="menu-item">
            <img src={url} alt="aaa" />
            <p>{nome}</p>
        </div>
        <div className="menu-item">
            <div className="bg-col">
            <i className='tam'>22</i>
            </div>
            <p>{cidade[0]}</p>
        </div>
        <div className="menu-item">
            <div className="bg-col">
            <i className='bx bx-map'></i>
            </div>
            <p>{cidade[0]}</p>
        </div>
      </div>
    </div>
  )
}

export default MenuLateralComprar
