import React, { useState } from 'react'
import '../components/BoxLogin.css'
import imgLogin from '../assets/Popcorns.gif';
import vetorLogo from '../assets/logoVetor.svg'


const BoxLogin = () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('teste', email, senha);

    setEmail("");
    setSenha("");
   
  };
  return (
   
      <div className='box-login'>
      <img className='imgPopcornLogin' src={imgLogin} alt="" />
      <div className="form-box">
      {/* <img className='logoVetor' src={vetorLogo} alt="" /> */}

        <form onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
            <div>
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>          
          <input type="submit" value={'Enviar'} className='btnSubmit' />
        </form>
      </div>
    </div>
  )
}

export default BoxLogin
