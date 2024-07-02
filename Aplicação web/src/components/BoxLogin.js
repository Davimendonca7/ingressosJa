import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../components/BoxLogin.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import imgLogin from '../assets/Popcorns.gif';
import vetorLogo from '../assets/logo.svg'


const BoxLogin = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeDeUsuario, setNomeDeUsuario] = useState("");


  const [nomeDeUsuarioVisible, setNomeDeUsuarioVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const [senhaVisible, setSenhaVisible] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('teste', email, senha, nomeDeUsuario);

    const data = {
      username: nomeDeUsuario,
      email: email,
      senha: senha,
  };
  const MySwal = withReactContent(Swal)
  axios.post('http://localhost:8080/cliente/autenticar', data)
      .then(response => {
          console.log('Resposta do servidor:', response.data);
          if(response.data.mensagem === 'Autentificado com sucesso'){
            MySwal.fire({
              position: "top-end",
              icon: "success",
              iconColor: '#FFC727',
              title: "Login reliazado com sucesso",
              showConfirmButton: false,
              timer: 1500,
              background: '#2F2D2A',
              color: '#fff' 
            });
            setEmail("");
            setSenha("");
            setNomeDeUsuario("");
            sessionStorage.NOME_USUARIO = nomeDeUsuario
            sessionStorage.EMAIL_USUARIO = email
            sessionStorage.LOGADO = true
            setTimeout(()=>{navigate('/')}, 2000)
          }
          if(response.data.mensagem === 'Username incorreto'){
           setNomeDeUsuarioVisible(true)
          }else setNomeDeUsuarioVisible(false)

          if(response.data.mensagem === 'Email incorreto'){
            setEmailVisible(true)
           }else setEmailVisible(false)

           if(response.data.mensagem === 'Senha incorreta'){
            setSenhaVisible(true)
           }else setSenhaVisible(false)
      })
      .catch(error => {
          console.error('Erro ao enviar requisição:', error);
       
      });

    
   
  };
  return (
   
      <div className='box-login'>
      <img className='imgPopcornLogin' src={imgLogin} alt="" />
      <div className="form-box">
      <div className="logoDiv">
      <img className='logoVetor' src={vetorLogo} alt="" />
      </div>

        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="email">Nome de usuário</label>
            <input type="text" name="email" placeholder="Digite seu nome de usuário" value={nomeDeUsuario} onChange={(e) => setNomeDeUsuario(e.target.value)} />
            {nomeDeUsuarioVisible && (<p className='alert-input'>Usuário inválido</p>)}
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            {emailVisible && (<p className='alert-input'>E-mail não encontrado</p>)}

          </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
              {senhaVisible && (<p className='alert-input'>Senha não coincide com o usuário</p>)}

            </div>          
          <input type="submit" value={'Entrar'} className='btnSubmit' />
        </form>
      </div>
    </div>
  )
}

export default BoxLogin
