import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import imgLogin from '../assets/Popcorns.gif';
import './BoxCadastro.css';

const BoxCadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");


  

  const handleTelefoneChange = (e) => {
    const maskedValue = e.target.value;
    const cleanedValue = maskedValue.replace(/[^\d]/g, '');
    setTelefone(cleanedValue)
  };

  const handleCpfChange = (e) => {
    const maskedValue = e.target.value;
    const cleanedValue = maskedValue.replace(/[^\d]/g, ''); 
    setCpf(cleanedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('teste', nome, email, senha, telefone, cpf);
    setNome("");
    setEmail("");
    setSenha("");
    setTelefone("");
    setCpf("");
  };

  return (
    <div className='box-cadastro'>
      <img className='imgPopcorn' src={imgLogin} alt="" />
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="box-flex">
            <div>
              <label htmlFor="senha">Senha</label>
              <input type="password" className='iptSenha' name="senha" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </div>
            <div>
              <label htmlFor="telefone">Telefone</label>
              <InputMask 
                mask="(99) 99999-9999" 
                value={telefone} 
                onChange={handleTelefoneChange} 
                onBlur={handleTelefoneChange}
              >
                {(inputProps) => <input {...inputProps} type="text" className='iptTelefone' name="telefone" placeholder="Digite seu telefone" />}
              </InputMask>
             
            </div>
          </div>
          <div>
            <label htmlFor="cpf">Cpf</label>
            <InputMask 
              mask="999.999.999-99" 
              value={cpf} 
              onChange={handleCpfChange} 
              onBlur={handleCpfChange}
            >
              {(inputProps) => <input {...inputProps} type="text" name="cpf" placeholder="Digite seu cpf" />}
            </InputMask>
          </div>
          <input type="submit" value={'Enviar'} className='btnSubmit' />
        </form>
      </div>
    </div>
  );
}

export default BoxCadastro;
