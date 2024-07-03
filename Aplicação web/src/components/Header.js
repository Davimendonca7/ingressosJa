import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import './Header.css'
import axios from 'axios';

import { Link } from 'react-router-dom'

const Header = ({onDataChanged}) => {
    const [locations, setLocations] = useState('')
    const [cidade, setCidade] = useState([])
    const [openModalUser, setOpenModalUser] = useState(false)
    const [openList, setOpenlist] = useState(false) 
    useEffect(() => {
        axios.get('http://localhost:8080/cinema/listar')
            .then(response => {
                console.log('oq tem aqui', response.data);
                setLocations(response.data);
                if (response.data.length > 0) {
                    const firstCity = response.data[0].nome;
                    const firstCityId = response.data[0].idCinema;
                    setCidade([firstCity, firstCityId]);
                }
            })
            .catch(error => {
                console.error('Erro ao enviar requisição:', error);
            });
        }, []); 
        // console.log('cidade kkkkkk', cidade);
        onDataChanged(cidade);
    // console.log('h', locations);
    // console.log('cidade', cidade);
  return (
    <div className='headerContainer'>
      <div className="container">
        <div className="col-1">
            <Link to={'/'}><img src={logo} height={'100px'} width={'180px'} alt='header'/></Link>
            <div className="location">
                <i className='bx bxs-map'></i>
                <button className='btnLocation' onClick={()=>{
                    if(openList === true){
                        setOpenlist(false)
                    }else {
                        setOpenlist(true)
                    }
                }}>{cidade[0]}<i className='bx bxs-chevron-down'></i></button>
                <div className="col-1-list-open">
                {openList === true && (locations.map((location)=>{
                    var a = location.endereco.split(',')
                    return (
                        <button className='btnOption'
                        key={location.idCinema}
                        onClick={(e)=>{
                            const [nome, id] = JSON.parse(e.target.value)
                            setOpenlist(false)
                            setCidade([nome, id])
                            onDataChanged([nome, id])
                        }} 
                        value={JSON.stringify([location.nome, location.idCinema])}
                        >{location.nome}, {a[0]} - {a[2]}
                        </button>
                    )
                }))}
                </div>
            </div>
            
        </div>
        <div className="user">
         
            {sessionStorage.getItem('EMAIL_USUARIO') === null ? (<button 
                onClick={()=>{
                    if(openModalUser === true){
                        setOpenModalUser(false)
                    }else {
                        setOpenModalUser(true)
                    }
                    // console.log('aqui', openModalUser);
                }}
                className='btnUser'>
                <i className='bx bxs-user-circle'></i>
                <span>Entrar ou cadastrar-se</span>
                </button>) : (<Link to={"/conta"}><i style={{fontSize: '40px'}} className='bx bxs-user-circle' ></i></Link>)}
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
                    <Link className='btnLogin' to={'/login'}>Entrar na minha conta<i className='bx bx-right-arrow-alt' ></i></Link>
                </div>
            </div>
            )}
      </div>
    </div>
  )
}

export default Header
