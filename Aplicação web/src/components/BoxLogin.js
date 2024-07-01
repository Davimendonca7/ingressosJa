import React, { useState } from 'react';
import axios from 'axios';
import '../components/BoxLogin.css'
import imgLogin from '../assets/Popcorns.gif';
import vetorLogo from '../assets/logo.svg'


const BoxLogin = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeDeUsuario, setNomeDeUsuario] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('teste', email, senha, nomeDeUsuario);

    const data = {
      nome: nomeDeUsuario,
      email: email,
      senha: senha,
  };

  axios.post('http://localhost:8080/cliente/autenticar', data)
      .then(response => {
          console.log('Resposta do servidor:', response.data);
          
      })
      .catch(error => {
          console.error('Erro ao enviar requisição:', error);
       
      });

    setEmail("");
    setSenha("");
    setNomeDeUsuario("");
   
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
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>          
          <input type="submit" value={'Entrar'} className='btnSubmit' />
        </form>
      </div>
    </div>
  )
}

export default BoxLogin
