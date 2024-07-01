import React, { useState } from 'react'
import logo from '../assets/logoVetor.svg'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = ({onDataChanged}) => {
    const locations = [
        { "id": 1, "nome": "São Paulo", "estado": "São Paulo" },
        { "id": 2, "nome": "Rio de Janeiro", "estado": "Rio de Janeiro" },
        { "id": 3, "nome": "Belo Horizonte", "estado": "Minas Gerais" },
        { "id": 4, "nome": "Porto Alegre", "estado": "Rio Grande do Sul" },
        { "id": 5, "nome": "Curitiba", "estado": "Paraná" },
        { "id": 6, "nome": "Recife", "estado": "Pernambuco" },
        { "id": 7, "nome": "Fortaleza", "estado": "Ceará" },
        { "id": 8, "nome": "Salvador", "estado": "Bahia" },
        { "id": 9, "nome": "Brasília", "estado": "Distrito Federal" },
        { "id": 10, "nome": "Manaus", "estado": "Amazonas" }
    ]
    const [cidade, setCidade] = useState(locations[0].nome)
    const [openModalUser, setOpenModalUser] = useState(false)
    const [openList, setOpenlist] = useState(false) 
    onDataChanged(cidade)
  return (
    <div className='headerContainer'>
      <div className="container">
        <div className="col-1">
            <img src={logo} height={'100px'} width={'120px'}/>
            <div className="location">
                <i class='bx bxs-map'></i>
                <button className='btnLocation' onClick={()=>{
                    if(openList === true){
                        setOpenlist(false)
                    }else {
                        setOpenlist(true)
                    }
                }}>{cidade}<i class='bx bxs-chevron-down'></i></button>
                <div className="col-1-list-open">
                {openList === true && (locations.map((location)=>(
                        <button className='btnOption'
                        key={location.id}
                        
                        onClick={(e)=>{
                            setOpenlist(false)
                            setCidade(e.target.value)
                            onDataChanged(e.target.value)
                        }} 
                        value={location.nome}
                        >{location.nome}, {location.estado}
                        </button>
                    )))}
                </div>
            </div>
            
        </div>
        <div className="user">
                
                <button 
                onClick={()=>{
                    if(openModalUser === true){
                        setOpenModalUser(false)
                    }else {
                        setOpenModalUser(true)
                    }
                    console.log('aqui', openModalUser);
                }}
                className='btnUser'>
                <i class='bx bxs-user-circle'></i>
                <span>Entrar ou cadastrar-se</span>
                </button>
            </div>
            {openModalUser === true && (
                <div className="modalUser">
                <div className="user-cadastro">
                    <h2>Ainda não tem cadastro?</h2>
                    <p>Compre ingressos para ir ao cinema com segurança e comodidade!</p>
                    <Link className='btnCriarConta' to={'/cadastrar'}>Criar uma conta</Link>
                </div>
                <hr />
                <div className="user-login">
                    <h2>Conta INGRESSOSJÁ</h2>
                    <Link className='btnLogin' to={'/login'}>Entrar na minha conta</Link>
                </div>
            </div>
            )}
      </div>
    </div>
  )
}

export default Header
