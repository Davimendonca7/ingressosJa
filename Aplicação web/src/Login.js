import React, { useEffect } from 'react'
import HeaderLoginCadastro from './components/HeaderLoginCadastro'
import BoxLogin from './components/BoxLogin'

const Login = () => {
  useEffect(() => {
    document.title = "IngressosJá - Login";
  }, []);
  return (
    <div>
        <HeaderLoginCadastro data={'Login'}/>
        <BoxLogin/>
    </div>
  )
}

export default Login
